import { getUsdPrice, getUsdPricePerToken } from "../prices"
import { fetchPool } from "../utils/entities/pool"
import { fetchUser } from "../utils/entities/user"
import { fetchTransaction } from "../utils/entities/transaction"
import { Withdraw, Deposit } from "../../generated/schema"
import { Address, Bytes, ethereum, BigDecimal } from "@graphprotocol/graph-ts"
import { fetchToken, toBigDecimal } from "../utils/entities/token"
import { LogDeposit, LogWithdraw, LogClaimBonusTokn } from "../../generated/templates/BathToken/BathToken"

export function handleLogDeposit(event: LogDeposit): void {

    // retrieve the underlying asset and bathtoken entities
    let asset = fetchToken(event.params.asset)
    let bathToken = fetchToken(event.address)

    // load the related entities
    let transaction = fetchTransaction(event)
    let depositor = fetchUser(event.params.depositor)
    let pool = fetchPool(event, asset, event.params.underlyingBalance, event.params.outstandingAmount, event.params.totalSupply, asset.decimals, bathToken.decimals)

    // format the balances based on the decimals of the associated token
    let amount_formatted = toBigDecimal(event.params.depositedAmt, asset.decimals)
    let shares_formatted = toBigDecimal(event.params.sharesReceived, bathToken.decimals)

    // calculate the price of the bathtoken based upon the ratio of the deposit amount to shares received
    let price = amount_formatted.div(shares_formatted)

    // get the USD price of the gems and calculate the USD amount
    let assetPrice: BigDecimal
    let fetchAssetPrice = getUsdPricePerToken(event.params.asset)

    if (!fetchAssetPrice.reverted) {
        assetPrice = fetchAssetPrice.usdPrice.div(fetchAssetPrice.decimalsBaseTen)
    } else {
        assetPrice = fetchAssetPrice.usdPrice
    }

    let assetAmtUsd = amount_formatted.times(assetPrice)

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

    // retrieve the underlying asset and bathtoken entities
    let asset = fetchToken(event.params.asset)
    let bathToken = fetchToken(event.address)

    // load the related entities
    let transaction = fetchTransaction(event)
    let withdrawer = fetchUser(event.params.withdrawer)
    let pool = fetchPool(event, asset, event.params.underlyingBalance, event.params.outstandingAmount, event.params.totalSupply, asset.decimals, bathToken.decimals)

    // format the balances based on the decimals of the associated token
    let amount_formatted = toBigDecimal(event.params.amountWithdrawn, asset.decimals)
    let shares_formatted = toBigDecimal(event.params.sharesWithdrawn, bathToken.decimals)
    let fee_formatted = toBigDecimal(event.params.fee, asset.decimals)
    
    // calculate the price of the bathtoken based upon the ratio of the deposit amount to shares received - note this does not include the fee
    let price = amount_formatted.div(shares_formatted)

    // get the USD price of the gems and calculate the USD amount
    let assetPrice: BigDecimal
    let fetchAssetPrice = getUsdPricePerToken(event.params.asset)

    if (!fetchAssetPrice.reverted) {
        assetPrice = fetchAssetPrice.usdPrice.div(fetchAssetPrice.decimalsBaseTen)
    } else {
        assetPrice = fetchAssetPrice.usdPrice
    }

    let assetAmtUsd = amount_formatted.times(assetPrice)
    let feeAmtUsd = fee_formatted.times(assetPrice)

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