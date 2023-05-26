import { OVMOracle } from "../../generated/RubiconMarket/OVMOracle";
import { toBigDecimal } from "../utils/entities/token";
import { dataSource, Address, ethereum, Bytes, BigDecimal, BigInt } from '@graphprotocol/graph-ts'
import { ZERO_BI, ONE_BI, ZERO_BD, ADDRESS_ZERO, WETH, BI_18 } from './constants'

// TODO: this can most likely be sped up by batching all of these calls into a single call that returns all of the values
export function getL1BaseFee(): BigInt {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_l1BaseFee()
    let l1BaseFee = ZERO_BI
    if (result.reverted) {
        l1BaseFee = ZERO_BI
    } else {
        l1BaseFee = result.value
    }

    return l1BaseFee //toBigDecimal(l1BaseFee, BI_18)
}

export function getL1GasUsed(input: Bytes): BigInt {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_getL1GasUsed(input)
    let l1GasUsed = ZERO_BI
    if (result.reverted) {
        l1GasUsed = ZERO_BI
    } else {
        l1GasUsed = result.value
    }

    return l1GasUsed
}

export function getOverhead(): BigInt {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_overhead()
    let overhead = ZERO_BI
    if (result.reverted) {
        overhead = ZERO_BI
    } else {
        overhead = result.value
    }

    return overhead
}

export function getScalar(): BigInt {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_scalar()
    let scalar = ZERO_BI
    if (result.reverted) {
        scalar = ZERO_BI
    } else {
        scalar = result.value
    }

    return scalar
}

export function getDecimal(): BigInt {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_decimals()
    let decimal = ZERO_BI
    if (result.reverted) {
        decimal = ZERO_BI
    } else {
        decimal = result.value
    }

    return decimal
}

export function getL1Fee(input: Bytes): BigDecimal {
    let result = OVMOracle.bind(Address.fromString("0x420000000000000000000000000000000000000F")).try_getL1Fee(input)
    let l1Fee = ZERO_BI
    if (result.reverted) {
        l1Fee = ZERO_BI
    } else {
        l1Fee = result.value
    }

    return toBigDecimal(l1Fee, BI_18)
}

// optimism gas formula 
// l2_execution_fee = transaction_gas_price * l2_gas_used
// l1_data_fee = l1_gas_price * (tx_data_gas + fixed_overhead) * dynamic_overhead
// tx_data_gas = count_zero_bytes(tx_data) * 4 + count_non_zero_bytes(tx_data) * 16
// l1_data_fee = l1BaseFee * (l1_gas_used + overhead) * scalar / decimals


// transaction_gas_price = l2_gas_price = Transaction.gasPrice
// l2_gas_used = TransactionReceipt.gasUsed



// l1_gas_price = ovmOracle.l1BaseFee
// fixed_overhead = ovmOracle.overhead - this could also potentially be set to 2100 as it doesn't really change, would make the query more performant
// scalar = ovmOracle.scalar
// decimals = ovmOracle.decimals

// l1_gas_used = ovmOracle.getL1GasUsed(Transaction.input)

// GAS ORACLE: https://optimistic.etherscan.io/address/0x420000000000000000000000000000000000000F

/**
 * An Ethereum transaction.
 */
// export class Transaction {
//    constructor(
//    public hash: Bytes,
//    public index: BigInt,
//    public from: Address,
//    public to: Address | null,
//    public value: BigInt,
//    public gasLimit: BigInt,
//    public gasPrice: BigInt,
//    public input: Bytes,
//    public nonce: BigInt,
//    ) {}
//}

/**
 * An Ethereum transaction receipt.
 */
// export class TransactionReceipt {
//    constructor(
//    public transactionHash: Bytes,
//    public transactionIndex: BigInt,
//    public blockHash: Bytes,
//    public blockNumber: BigInt,
//    public cumulativeGasUsed: BigInt,
//    public gasUsed: BigInt,
//    public contractAddress: Address,
//    public logs: Array<Log>,
//    public status: BigInt,
//    public root: Bytes,
//    public logsBloom: Bytes,
//    ) {}
//} 