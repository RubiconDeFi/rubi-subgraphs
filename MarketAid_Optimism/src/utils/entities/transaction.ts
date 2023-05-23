import { toBigDecimal } from './token'
import { getUsdPricePerToken } from '../prices'
import { Transaction } from '../../../generated/schema'
import { ethereum, BigDecimal, Bytes, ByteArray } from '@graphprotocol/graph-ts'
import { ONE_BI, WETH, BI_18, ZERO_BI, BI_6, ADDRESS_ZERO } from '../constants'
import { getL1BaseFee, getL1Fee, getL1GasUsed, getOverhead, getScalar, getDecimal } from '../gas'

export function fetchTransaction(event: ethereum.Event): Transaction {
    
    let transaction = Transaction.load(event.transaction.hash)

    if (transaction == null) {

        // get the eth price at the current block 
        let tokenPrice: BigDecimal;
        let fetchPrice = getUsdPricePerToken(WETH)
        tokenPrice = fetchPrice.usdPrice

        transaction = new Transaction(event.transaction.hash)
        transaction.block = event.block.number
        transaction.index = event.transaction.index
        transaction.txn = event.transaction.hash.toHexString()
        transaction.timestamp = event.block.timestamp
        transaction.from = event.transaction.from
        transaction.eth_price = tokenPrice
        transaction.price_source = fetchPrice.oracleType
        transaction.save()
    }
    return transaction as Transaction
}