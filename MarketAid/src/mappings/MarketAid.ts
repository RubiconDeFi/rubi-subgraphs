import { Aid, AidToken, AidTokenHistory, BookUpdate } from "../../generated/schema"
import { LogBookUpdate } from "../../generated/templates/MarketAid/MarketAid"
import { fetchTransaction } from "../utils/entities/transaction"
import { fetchToken } from "../utils/entities/token"

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