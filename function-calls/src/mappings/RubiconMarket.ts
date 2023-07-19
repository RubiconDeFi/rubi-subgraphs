import { ZERO_BI } from "../utils/constants";
import { Bytes } from "@graphprotocol/graph-ts";
import { Transaction, Buy, BuyAll, SellAll } from "../../generated/schema";
import { BuyCall, BuyAllAmountCall, SellAllAmountCall } from "../../generated/RubiconMarket/RubiconMarket";

export function handleBuy(call: BuyCall): void {

    let tx = Transaction.load(call.transaction.hash)
    if (tx == null) {
        tx = new Transaction(call.transaction.hash)
        tx.timestamp = call.block.timestamp
        tx.block_number = call.block.number
        tx.block_index = call.transaction.index
        tx.save()
    }

    let buy = new Buy(call.transaction.hash)
    buy.transaction = tx.id
    buy.save()
}

export function handleBuyAllAmount(call: BuyAllAmountCall): void {

    let tx = Transaction.load(call.transaction.hash)
    if (tx == null) {
        tx = new Transaction(call.transaction.hash)
        tx.timestamp = call.block.timestamp
        tx.block_number = call.block.number
        tx.block_index = call.transaction.index
        tx.save()
    }

    let buyAll = new BuyAll(call.transaction.hash)
    buyAll.transaction = tx.id
    buyAll.save()
}

export function handleSellAllAmount(call: SellAllAmountCall): void {

    let tx = Transaction.load(call.transaction.hash)
    if (tx == null) {
        tx = new Transaction(call.transaction.hash)
        tx.timestamp = call.block.timestamp
        tx.block_number = call.block.number
        tx.block_index = call.transaction.index
        tx.save()
    }

    let sellAll = new SellAll(call.transaction.hash)
    sellAll.transaction = tx.id
    sellAll.save()
}