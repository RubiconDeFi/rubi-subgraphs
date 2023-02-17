import { Aid, AidToken, AidTokenHistory, BookUpdate, Arb, Take, Offer } from "../../generated/schema"
import { LogBookUpdate, LogAtomicArbitrage } from "../../generated/templates/MarketAid/MarketAid"
import { fetchTransaction } from "../utils/entities/transaction"
import { fetchToken } from "../utils/entities/token"
import { BigInt, Bytes } from "@graphprotocol/graph-ts"

export function handleLogBookUpdate(event: LogBookUpdate): void {

    // get the aid entity 
    let aid = Aid.load(event.address)
    if (!aid) {
        return
    }

    // load the token entity
    let token = fetchToken(event.params.token)

    // load the transaction entity
    let transaction = fetchTransaction(event)
    transaction.aid = aid.id
    transaction.save()

    // get the aid token entity or create it if it doesn't exist
    let aidToken = AidToken.load(event.address.concat(event.params.token))
    if (!aidToken) {
        aidToken = new AidToken(event.address.concat(event.params.token))
        aidToken.aid = aid.id
        aidToken.token = token.id
        aidToken.balance = event.params.amountChanged
        aidToken.save()
    } else {
        aidToken.balance = aidToken.balance.plus(event.params.amountChanged)
        aidToken.save()
    }

    // create the aid token history entity
    let aidHistory = AidTokenHistory.load(event.address.concat(event.params.token).concat(event.transaction.hash))
    if (!aidHistory) {
        aidHistory = new AidTokenHistory(event.address.concat(event.params.token).concat(event.transaction.hash))
        aidHistory.timestamp = event.block.timestamp
        aidHistory.aid = aid.id
        aidHistory.aid_token = aidToken.id
        aidHistory.balance = aidToken.balance
        aidHistory.balance_change = event.params.amountChanged
        aidHistory.transaction = transaction.id
        aidHistory.save()
    }

    // create the book update entity
    let bookUpdate = new BookUpdate(event.address.concat(event.params.token).concat(event.transaction.hash))
    bookUpdate.aid_token = aidToken.id
    bookUpdate.transaction = transaction.id
    bookUpdate.amount = event.params.amountChanged
    bookUpdate.user = event.transaction.from
    bookUpdate.save()
}

export function handleLogArb(event: LogAtomicArbitrage): void {

    // get the aid entity 
    let aid = Aid.load(event.address)
    if (!aid) {
        return
    }

    // load the transaction entity
    let transaction = fetchTransaction(event)
    transaction.aid = aid.id
    transaction.save()

    // fetch the token entities 
    let assetToSell = fetchToken(event.params.assetSold)
    let assetToTarget = fetchToken(event.params.assetReceived)

    // create the arb entity
    let arb = new Arb(event.address.concat(event.transaction.hash).concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    arb.transaction = transaction.id
    arb.timestamp = event.block.timestamp
    arb.aid = aid.id
    arb.asset = assetToSell.id
    arb.quote = assetToTarget.id
    arb.amount = event.params.amountSold
    arb.profit = event.params.profit
    arb.save()

    // depending on the route, we will need to debit and credit the user's balance
    if (event.params.isBuyRubiconFirst) {

        // first the assetToSell is sold on Rubicon 
            // this will debit the assetToTarget value by both the AmountToSell and by the Fee
            // if the aid is also the maker, then it will both debit and credit the assetToSell and subtract only the Fee
            // this would mean the Token history would be < the assetToSell amount. 
                // so, the fee value will either be the current balance - assetToSell or the current balance by itself
        let sellTokenHistory = AidTokenHistory.load(event.address.concat(event.params.assetSold).concat(event.transaction.hash))
        if (!sellTokenHistory) {
            // if this isn't loading then we have bigger problems
            return
        } else {

            // check if the balance is less than the amount to sell, if so, then the aid was not the maker and we need to crebit the amount sold plus profit
            let sellAmount = BigInt.fromI32(-1).times(event.params.amountSold)
            if (sellTokenHistory.balance.lt(sellAmount)) {
                sellTokenHistory.balance_change = sellTokenHistory.balance_change.plus(event.params.amountSold).plus(event.params.profit)
                sellTokenHistory.balance = sellTokenHistory.balance.plus(event.params.amountSold).plus(event.params.profit)
                sellTokenHistory.save()

                let sellToken = AidToken.load(event.address.concat(sellTokenHistory.aid_token))
                if (!sellToken) {
                    return
                } else {
                    sellToken.balance = sellTokenHistory.balance
                    sellToken.save()
                }

            } else {
                // if the balance is greater than the amount to sell, then the aid was the maker and we simply need to credit the profit
                sellTokenHistory.balance_change = sellTokenHistory.balance_change.plus(event.params.profit)
                sellTokenHistory.balance = sellTokenHistory.balance.plus(event.params.profit)
                sellTokenHistory.save()

                let sellToken = AidToken.load(event.address.concat(sellTokenHistory.aid_token))
                if (!sellToken) {
                    return
                }
                sellToken.balance = sellTokenHistory.balance
                sellToken.save()

            }
        }
        let targetTokenHistory = AidTokenHistory.load(event.address.concat(event.params.assetReceived).concat(event.transaction.hash))
        if (!targetTokenHistory) {
            return 
        } else {

            let targetToken = AidToken.load(event.address.concat(targetTokenHistory.aid_token))

            // now we need to debit the assetReceived value by the amount changed
            if (!targetToken) {
                return
            } else {
                targetToken.balance = targetToken.balance.minus(targetTokenHistory.balance_change)
                targetToken.save()
            }

            targetTokenHistory.balance = targetToken.balance.minus(targetTokenHistory.balance_change)
            targetTokenHistory.balance_change = BigInt.fromI32(0)
            targetTokenHistory.save()
        }       
    } else {

        // the assetToTarget is sold on Rubicon, this was originally bought on Uniswap. we need to debit the assetToSell value by the amount sold, and keep the fee
        // since this isn't provided, we will need to calculate the fee from the amount change, assuming the fee is 1 basis point
        let sellTokenHistory = AidTokenHistory.load(event.address.concat(event.params.assetReceived).concat(event.transaction.hash))
        if (!sellTokenHistory) {
            return
        } else {
            
            // load in the transaction entity, we will determine the fill amount from the LogTakes attached to the transaction
            let change = BigInt.fromI32(0)
            transaction.takes.forEach((take) => {
                let logTake = Take.load(take)
                if (!logTake) {
                    change.plus(BigInt.fromI32(0))
                } else {
                    change.minus(logTake.buy_amt)
                }
            })

            // if the balance change is less than the fill amount, the aid was not the maker and we need to credit the amount sold 
            if (sellTokenHistory.balance_change.lt(change)) {
                sellTokenHistory.balance_change = sellTokenHistory.balance_change.minus(change)
                sellTokenHistory.balance = sellTokenHistory.balance.minus(change)
                sellTokenHistory.save()

                let sellToken = AidToken.load(event.address.concat(sellTokenHistory.aid_token))
                if (!sellToken) {
                    return
                } else {
                    sellToken.balance = sellTokenHistory.balance
                    sellToken.save()
                }
                // else, the aid was the maker and we do not need to change the sellToken balance
            }   
            // the assetToSell was already credited to the account when it was bought on Rubicon, so we do not need to change the balance
        }
    }

    // if buying on rubicon is the first step of the route, then the `assetToSell` is being sold on Rubicon for the `assetToTarget`
        // in this case, we will need to debit the `assetToTarget` from the user's balance as it is then being sold on Uniswap
        // we will then need to credit the user's balance with the `assetToSell` as it is being bought on Uniswap + the profit from the arbitrage
        // we will do this both within the token history entity and in the token balance entity

    // if buying on rubicon is the second step of the route, then the `assetToTarget` is being sold on Rubicon for the `assetToSell`
        // in this case, we will need to debit the `assetToSell` from the user's balance as it was previously sold on Uniswap
        // we will then need to credit the user's balance with the `assetToTarget` as it is being bought on Rubicon 
        // we will also then need to credit the user's balance with the profit from the arbitrage, this will be in the `assetToSell`

    // if you fill your own offer, then the offer pay_amt will be zero, and the buy_gem amount would be negative 
    
}