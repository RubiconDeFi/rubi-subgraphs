import { Aid, AidToken, AidTokenHistory, BookUpdate, Arb, Take, Offer } from "../../generated/schema"
import { LogBookUpdate, LogAtomicArbitrage, LogExternalSwap } from "../../generated/templates/MarketAid/MarketAid"
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
}

export function handleLogExternalSwap(event: LogExternalSwap): void {

    // get the aid entity
    let aid = Aid.load(event.address)
    if (!aid) {
        return
    }

    // load the transaction entity
    let transaction = fetchTransaction(event)
    transaction.aid = aid.id
    transaction.save()

    // load in the token account for the aid entity - if the token does not already have an account and it is attempting to sell it we have a problem
    let assetSold = AidToken.load(event.address.concat(event.params.assetSold))
    if (!assetSold) {
        return
    } else {
        assetSold.balance = assetSold.balance.minus(event.params.amountSold)
        assetSold.save()

        let assetReceivedHistory = AidTokenHistory.load(event.address.concat(event.params.assetReceived).concat(event.transaction.hash))
        if (!assetReceivedHistory) {
            assetReceivedHistory = new AidTokenHistory(event.address.concat(event.params.assetReceived).concat(event.transaction.hash))
            assetReceivedHistory.timestamp = event.block.timestamp
            assetReceivedHistory.aid = aid.id
            assetReceivedHistory.aid_token = assetSold.id
            assetReceivedHistory.balance = assetSold.balance
            assetReceivedHistory.balance_change = event.params.amountSold
            assetReceivedHistory.transaction = transaction.id
            assetReceivedHistory.save()
        } else {
            assetReceivedHistory.balance = assetReceivedHistory.balance.plus(assetSold.balance)
            assetReceivedHistory.balance_change = assetReceivedHistory.balance_change.minus(event.params.amountSold)
            assetReceivedHistory.save()
        }
    }

    let assetReceived = AidToken.load(event.address.concat(event.params.assetReceived))
    if (!assetReceived) {
        assetReceived = new AidToken(event.address.concat(event.params.assetReceived))
        assetReceived.aid = aid.id
        assetReceived.token = fetchToken(event.params.assetReceived).id
        assetReceived.balance = event.params.amountReceived
        assetReceived.save()
    } else {
        assetReceived.balance = assetReceived.balance.plus(event.params.amountReceived)
        assetReceived.save()

        let assetSoldHistory = AidTokenHistory.load(event.address.concat(event.params.assetSold).concat(event.transaction.hash))
        if (!assetSoldHistory) {
            assetSoldHistory = new AidTokenHistory(event.address.concat(event.params.assetSold).concat(event.transaction.hash))
            assetSoldHistory.timestamp = event.block.timestamp
            assetSoldHistory.aid = aid.id
            assetSoldHistory.aid_token = assetSold.id
            assetSoldHistory.balance = assetSold.balance
            assetSoldHistory.balance_change = event.params.amountSold
            assetSoldHistory.transaction = transaction.id
            assetSoldHistory.save()
        } else {
            assetSoldHistory.balance = assetSoldHistory.balance.minus(event.params.amountSold)
            assetSoldHistory.balance_change = assetSoldHistory.balance_change.plus(event.params.amountSold)
            assetSoldHistory.save()
        }
    }
}