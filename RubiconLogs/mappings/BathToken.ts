import {
    LogDeposit, 
    Deposit, 
    LogWithdraw,
    Withdraw,
    Transfer
} from '../generated/bathETH/BathToken'
import {
    Deposited, 
    Withdrawed,
    Transfered
} from '../generated/schema'
import { BigInt, Address, BigDecimal, store } from '@graphprotocol/graph-ts'

export function handleDeposit(event: LogDeposit): void {
    
    let id = event.transaction.hash.toString().concat('-').concat(event.logIndex.toString())
    let deposit = new Deposited(id)
    deposit.timestamp = event.block.timestamp
    deposit.block = event.block.number
    deposit.block_index = event.transaction.index
    deposit.txn = event.transaction.hash.toHexString()
    deposit.evt_index = event.logIndex
    //deposit.user = event.params.depositor.toHexString()
    deposit.asset = event.params.asset.toHexString()
    deposit.amount = event.params.depositedAmt
    deposit.shares = event.params.sharesReceived
    deposit.pool = event.address.toHexString()

    // if the depositor is the router, use the transaction origin 
    if (event.params.depositor.toHexString() == "0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf") {
        deposit.user = event.transaction.from.toHexString()
    } else {
        deposit.user = event.params.depositor.toHexString()
    }

    deposit.save()
}

export function handlePriorDeposit(event: Deposit): void {
    let id = event.transaction.hash.toString().concat('-').concat(event.logIndex.toString())
    let deposit = new Deposited(id)
    deposit.timestamp = event.block.timestamp
    deposit.block = event.block.number
    deposit.block_index = event.transaction.index
    deposit.txn = event.transaction.hash.toHexString()
    deposit.evt_index = event.logIndex
    //deposit.user = event.params.depositor.toHexString()
    deposit.asset = event.params.asset.toHexString()
    deposit.amount = event.params.depositedAmt
    deposit.shares = event.params.sharesReceived
    deposit.pool = event.address.toHexString()

    // if the depositor is the router, use the transaction origin 
    if (event.params.depositor.toHexString() == "0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf") {
        deposit.user = event.transaction.from.toHexString()
    } else {
        deposit.user = event.params.depositor.toHexString()
    }

    deposit.save()
}

export function handleWithdraw(event: LogWithdraw): void {
    let id = event.transaction.hash.toString().concat('-').concat(event.logIndex.toString())
    let withdraw = new Withdrawed(id)
    withdraw.timestamp = event.block.timestamp
    withdraw.block = event.block.number
    withdraw.block_index = event.transaction.index
    withdraw.txn = event.transaction.hash.toHexString()
    withdraw.evt_index = event.logIndex
    //withdraw.user = event.params.withdrawer.toHexString()
    withdraw.asset = event.params.asset.toHexString()
    withdraw.amount = event.params.amountWithdrawn
    withdraw.shares = event.params.sharesWithdrawn
    withdraw.pool = event.address.toHexString()
    
    // if the withdrawer is the router, use the transaction origin 
    if (event.params.withdrawer.toHexString() == "0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf") {
        withdraw.user = event.transaction.from.toHexString()
    } else {
        withdraw.user = event.params.withdrawer.toHexString()
    }

    withdraw.save()
}

export function handlePriorWithdraw(event: Withdraw): void {
    let id = event.transaction.hash.toString().concat('-').concat(event.logIndex.toString())
    let withdraw = new Withdrawed(id)
    withdraw.timestamp = event.block.timestamp
    withdraw.block = event.block.number
    withdraw.block_index = event.transaction.index
    withdraw.txn = event.transaction.hash.toHexString()
    withdraw.evt_index = event.logIndex
    //withdraw.user = event.params.withdrawer.toHexString()
    withdraw.asset = event.params.asset.toHexString()
    withdraw.amount = event.params.amountWithdrawn
    withdraw.shares = event.params.sharesWithdrawn
    withdraw.pool = event.address.toHexString()

    // if the withdrawer is the router, use the transaction origin 
    if (event.params.withdrawer.toHexString() == "0x7Af14ADc8Aea70f063c7eA3B2C1AD0D7A59C4bFf") {
        withdraw.user = event.transaction.from.toHexString()
    } else {
        withdraw.user = event.params.withdrawer.toHexString()
    }

    withdraw.save()
}

export function handleTransfer(event: Transfer): void {
    // avoid accessing events where the sender or receiver is address zero
    if (event.params.from.toHexString() !== '0x0000000000000000000000000000000000000000' &&
        event.params.to.toHexString() !== '0x0000000000000000000000000000000000000000') { 
            let id = event.transaction.hash.toString().concat('-').concat(event.logIndex.toString())
        let transfer = new Transfered(id)
        transfer.timestamp = event.block.timestamp
        transfer.block = event.block.number
        transfer.block_index = event.transaction.index
        transfer.txn = event.transaction.hash.toHexString()
        transfer.evt_index = event.logIndex
        transfer.from_address = event.params.from.toHexString()
        transfer.to = event.params.to.toHexString()
        transfer.pool = event.address.toHexString()
        transfer.amount = event.params.value
        transfer.save()
    }
}