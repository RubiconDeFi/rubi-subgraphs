import { ethereum } from '@graphprotocol/graph-ts'
import { Transaction } from '../../../generated/schema' 
import { fetchRubicon } from './rubicon'
import { ONE_BI } from '../constants'

export function fetchTransaction(event: ethereum.Event): Transaction {
    
    let transaction = Transaction.load(event.transaction.hash)

    if (transaction == null) {

        let rubicon = fetchRubicon()
        rubicon.total_transactions = rubicon.total_transactions.plus(ONE_BI)
        rubicon.save()

        transaction = new Transaction(event.transaction.hash)
        transaction.block = event.block.number
        transaction.timestamp = event.block.timestamp
        transaction.save()
    }
    return transaction as Transaction
}