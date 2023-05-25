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

        // from the transaction get the l2 gas price 
        let gasPriceL2 = toBigDecimal(event.transaction.gasPrice, BI_18)

        // from the transaction receipt get the gas used 
        var gasUsedL2 = ZERO_BI
        
        if (event.receipt == null) {
            gasUsedL2 = ZERO_BI
        } else {
            gasUsedL2 = event.receipt!.gasUsed
        }

        let gasUsedL2BD = BigDecimal.fromString(gasUsedL2.toString())

        // get the l2 execution fee
        let l2ExecutionFee = gasPriceL2.times(gasUsedL2BD)

        // get the l2 execution fee in USD
        let l2ExecutionFeeUSD = l2ExecutionFee.times(tokenPrice)

        // get the l1 base fee
        let l1BaseFee = getL1BaseFee()
        let l1BaseFeeBD = toBigDecimal(l1BaseFee, BI_18)

        // get the overhead
        let overhead = getOverhead()

        // get the scalar
        let scalar = getScalar()
        let scalarBD = toBigDecimal(scalar, BI_6)

        // get the decimal
        let decimal = getDecimal()

        // get the l1 fee
        let l1Fee = getL1Fee(event.transaction.input)

        // get the l1 fee in USD
        let l1FeeUSD = l1Fee.times(tokenPrice)

        // encode the transaction data to be passed to the price oracle 
        //let encoded = ethereum.encode(ethereum.Value.fromBytes(event.transaction.input))
        let encoded = ethereum.encode(ethereum.Value.fromBytes(event.transaction.input))

        // check that the value was properly encoded
        if (!encoded) {
            encoded = event.transaction.input
        }
    
        // get the l1 gas used  
        // an example of interacting with the gas oracle can be found here: https://github.com/ethereum-optimism/optimism/blob/afed0abe20fd9c5eb8f055e3273ee7c5bb2a37b7/packages/sdk/src/l2-provider.ts#L69
        // the function being called on the gas oracle can be found here: https://github.com/ethereum-optimism/optimism/blob/2706c9bfb32df723494882399c0811b9bc5c86c3/packages/contracts/contracts/L2/predeploys/OVM_GasPriceOracle.sol#L150
        let l1GasUsed = getL1GasUsed(encoded) 
        let l1GasUsedBD = BigDecimal.fromString(l1GasUsed.toString())

        // get the total gas fee and total gas fee in USD
        let totalGasFee = (gasPriceL2.times(gasUsedL2BD)).plus(l1BaseFeeBD.times(l1GasUsedBD).times(scalarBD))
        let totalGasFeeUSD = totalGasFee.times(tokenPrice)

        transaction = new Transaction(event.transaction.hash)
        transaction.block = event.block.number
        transaction.index = event.transaction.index
        transaction.txn = event.transaction.hash.toHexString()
        transaction.timestamp = event.block.timestamp
        transaction.from = event.transaction.from
        transaction.eth_price = tokenPrice
        transaction.price_source = fetchPrice.oracleType
        transaction.l2_gas_price = gasPriceL2
        transaction.l2_gas_used = gasUsedL2
        transaction.l2_execution_fee = l2ExecutionFee
        transaction.l2_execution_fee_usd = l2ExecutionFeeUSD
        transaction.l1_base_fee = l1BaseFeeBD
        transaction.l1_gas_used = l1GasUsedBD
        transaction.l1_overhead = overhead
        transaction.l1_scalar = scalarBD
        transaction.l1_decimal = decimal
        transaction.l1_fee = l1Fee
        transaction.l1_fee_usd = l1FeeUSD
        transaction.total_gas_fee = totalGasFee
        transaction.total_gas_fee_usd = totalGasFeeUSD
        transaction.save()
    }
    return transaction as Transaction
}