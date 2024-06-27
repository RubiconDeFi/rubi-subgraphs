import { fetchPool } from "../utils/entities/pool"
import { fetchUser } from "../utils/entities/user"
import { ZERO_BI, BI_18 } from "../utils/constants"
import { fetchTransaction } from "../utils/entities/transaction"
import { Withdraw, Deposit } from "../../generated/schema"
import { fetchPoolHourData, fetchPoolDayData } from "../utils/aggregates/value"
import { Address, Bytes, ethereum, BigDecimal, BigInt } from "@graphprotocol/graph-ts"
import { fetchToken, toBigDecimal } from "../utils/entities/token"
import { LogDeposit, LogWithdraw, LogClaimBonusTokn } from "../../generated/templates/BathToken/BathToken"
import { decimals } from "../config";


export function handleLogDeposit(event: LogDeposit): void {

    // make sure the deposit amount is greater than 0
    if (event.params.depositedAmt.equals(ZERO_BI)) {
        return
    }

    if (event.params.sharesReceived.equals(ZERO_BI)) {
        return
    }

    // retrieve the underlying asset and bathtoken entities
    let asset = fetchToken(event.params.asset)
    //let bathToken = fetchToken(event.address)

    if (!decimals.has(Address.fromHexString(asset.address).toHexString())) {
        return;
    }

    let tokenDecimals = BigInt.fromI32(decimals.get(Address.fromHexString(asset.address).toHexString()) as i32)

    // load the related entities
    let transaction = fetchTransaction(event)
    let depositor = fetchUser(event.params.depositor)
    //let pool = fetchPool(event, asset, event.params.underlyingBalance, event.params.outstandingAmount, event.params.totalSupply, tokenDecimals, bathToken.decimals)
    let pool = fetchPool(event, asset, event.params.underlyingBalance, event.params.outstandingAmount, event.params.totalSupply, tokenDecimals, BI_18)

    // format the balances based on the decimals of the associated token
    let amount_formatted = toBigDecimal(event.params.depositedAmt, tokenDecimals)
    let shares_formatted = toBigDecimal(event.params.sharesReceived, BI_18)

    // calculate the price of the bathtoken based upon the ratio of the deposit amount to shares received
    let price = amount_formatted.div(shares_formatted)

    // get the USD price of the gems and calculate the USD amount
    let assetPrice: BigDecimal = asset.currentPrice;

    let assetAmtUsd = amount_formatted.times(assetPrice)

    // load in the pool hour and day data entities
    let poolHourData = fetchPoolHourData(event.params.asset, event)
    let poolDayData = fetchPoolDayData(event.params.asset, event)

    // update the pool hour and day data entities
    poolHourData.total_deposit = poolHourData.total_deposit.plus(event.params.depositedAmt)
    poolHourData.total_deposit_usd = poolHourData.total_deposit_usd.plus(assetAmtUsd)
    poolHourData.save()

    poolDayData.total_deposit = poolDayData.total_deposit.plus(event.params.depositedAmt)
    poolDayData.total_deposit_usd = poolDayData.total_deposit_usd.plus(assetAmtUsd)
    poolDayData.save()

    // create the deposit entity
    let deposit = new Deposit(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
    deposit.transaction = transaction.id
    deposit.depositor = depositor.id
    deposit.pool = pool.id
    deposit.amount = event.params.depositedAmt
    deposit.amount_formatted = amount_formatted
    deposit.amount_usd = assetAmtUsd
    deposit.shares = event.params.sharesReceived
    deposit.shares_formatted = shares_formatted
    deposit.price = price
    deposit.save()
}

export function handleLogWithdraw(event: LogWithdraw): void {

    // make sure the withdraw amount is greater than 0
    if (event.params.amountWithdrawn.equals(ZERO_BI)) {
        return
    }

    if (event.params.sharesWithdrawn.equals(ZERO_BI)) {
        return
    }

    // retrieve the underlying asset and bathtoken entities
    let asset = fetchToken(event.params.asset)

    if (!decimals.has(Address.fromHexString(asset.address).toHexString())) {
        return;
    }

    let tokenDecimals = BigInt.fromI32(decimals.get(Address.fromHexString(asset.address).toHexString()) as i32)

    // load the related entities
    let transaction = fetchTransaction(event)
    let withdrawer = fetchUser(event.params.withdrawer)
    let pool = fetchPool(event, asset, event.params.underlyingBalance, event.params.outstandingAmount, event.params.totalSupply, tokenDecimals, BI_18)

    // format the balances based on the decimals of the associated token
    let amount_formatted = toBigDecimal(event.params.amountWithdrawn, tokenDecimals)
    let shares_formatted = toBigDecimal(event.params.sharesWithdrawn, BI_18)
    let fee_formatted = toBigDecimal(event.params.fee, tokenDecimals)
    
    // calculate the price of the bathtoken based upon the ratio of the deposit amount to shares received - note this does not include the fee
    let price = amount_formatted.div(shares_formatted)

    // get the USD price of the gems and calculate the USD amount
    let assetPrice = asset.currentPrice;

    let assetAmtUsd = amount_formatted.times(assetPrice)
    let feeAmtUsd = fee_formatted.times(assetPrice)

    // load in the pool hour and day data entities
    let poolHourData = fetchPoolHourData(event.params.asset, event)
    let poolDayData = fetchPoolDayData(event.params.asset, event)

    // update the pool hour and day data entities
    poolHourData.total_withdrawal = poolHourData.total_withdrawal.plus(event.params.amountWithdrawn)
    poolHourData.total_withdrawal_usd = poolHourData.total_withdrawal_usd.plus(assetAmtUsd)
    poolHourData.save()

    poolDayData.total_withdrawal = poolDayData.total_withdrawal.plus(event.params.amountWithdrawn)
    poolDayData.total_withdrawal_usd = poolDayData.total_withdrawal_usd.plus(assetAmtUsd)
    poolDayData.save()

    // create the withdraw entity
    let withdraw = new Withdraw(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.transaction.index))))
    withdraw.transaction = transaction.id
    withdraw.withdrawer = withdrawer.id
    withdraw.pool = pool.id
    withdraw.amount = event.params.amountWithdrawn
    withdraw.amount_formatted = amount_formatted
    withdraw.amount_usd = assetAmtUsd
    withdraw.shares = event.params.sharesWithdrawn
    withdraw.shares_formatted = shares_formatted
    withdraw.fee = event.params.fee
    withdraw.fee_formatted = fee_formatted
    withdraw.fee_usd = feeAmtUsd
    withdraw.price = price
    withdraw.save()
}

export function handleLogClaimBonusToken(event: LogClaimBonusTokn): void {
    
    // fetch the user to make sure they are in the database
    let user = fetchUser(event.transaction.from)

    // make sure the transaction is recorded
    let transaction = fetchTransaction(event)
}