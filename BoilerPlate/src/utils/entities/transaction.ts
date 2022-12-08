import { fetchUser } from './user'
import { ethereum } from '@graphprotocol/graph-ts'
import { Transaction } from '../../../generated/schema' 
import { Address, BigInt } from '@graphprotocol/graph-ts'

export function fetchTransaction(event: ethereum.Event): Transaction {
    
    let transaction = Transaction.load(event.transaction.hash)

    if (transaction == null) {

        const user = fetchUser(event.transaction.from)

        transaction = new Transaction(event.transaction.hash)
        transaction.block = event.block.number
        transaction.timestamp = event.block.timestamp
        transaction.user = user.id
        transaction.save()
    }
    return transaction as Transaction
}