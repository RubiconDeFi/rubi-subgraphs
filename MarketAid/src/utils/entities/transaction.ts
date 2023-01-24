import { ethereum } from '@graphprotocol/graph-ts'
import { Transaction } from '../../../generated/schema' 

export function fetchTransaction(event: ethereum.Event): Transaction {
    
    let transaction = Transaction.load(event.transaction.hash)

    if (transaction == null) {

        transaction = new Transaction(event.transaction.hash)
        transaction.block = event.block.number
        transaction.timestamp = event.block.timestamp
        transaction.from = event.transaction.from
        transaction.save()
    }
    return transaction as Transaction
}