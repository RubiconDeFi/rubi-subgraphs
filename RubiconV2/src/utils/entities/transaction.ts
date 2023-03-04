import { Transaction } from "../../../generated/schema";
import { ethereum } from '@graphprotocol/graph-ts'

export function getTransaction(event: ethereum.Event): Transaction {

    let transaction = Transaction.load(event.transaction.hash);

    if (!transaction) {
        transaction = new Transaction(event.transaction.hash);
        transaction.timestamp = event.block.timestamp;
        transaction.block_number = event.block.number;
        transaction.block_index = event.transaction.index;
        transaction.save();
    }
    return transaction as Transaction;
}