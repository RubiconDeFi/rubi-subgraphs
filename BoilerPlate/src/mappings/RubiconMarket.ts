import { LogMake, LogTake, LogKill, OfferDeleted } from "../../generated/RubiconMarket/RubiconMarket"

export function handleLogMake(event: LogMake): void {

}


/*
type Offer @entity {
    " the id of the offer on the RubiconMarket contract "
    id: Bytes!
    " the transaction entity that this offer was created from "
    transaction: Transaction!
    " the user entity that created this offer "
    maker: User!
    " the token that the offer will pay with "
    pay_gem: Token!
    " the token that the offer offer to buy "
    buy_gem: Token!
    " the amount of the pay token that the offer will pay - in the integer format "
    pay_amt: BigInt!
    " the amount of the buy token that the offer will buy - in the integer format "
    buy_amt: BigInt!
    " the amount of the pay token in human readable format "
    pay_amt_formatted: BigDecimal!
    " the amount of the buy token in human readable format "
    buy_amt_formatted: BigDecimal!
    " the USD value of the pay token at that block "
    pay_amt_usd: BigDecimal!
    " the USD value of the buy token at that block "
    buy_amt_usd: BigDecimal!
    " the amount of the pay token that the offer has paid out - in the integer format "
    paid_amt: BigInt!
    " the amount of the buy token that the offer has bought - in the integer format "
    bought_amt: BigInt!
    " the amount of the pay token that the offer has paid out in human readable format "
    paid_amt_formatted: BigDecimal!
    " the amount of the buy token that the offer has bought in human readable format "
    bought_amt_formatted: BigDecimal!
    " the sum of the USD value of the pay token that the offer has paid out at each fill instance "
    paid_amt_usd: BigDecimal!
    " the sum of the USD value of the buy token that the offer has bought at each fill instance "
    bought_amt_usd: BigDecimal!
    " boolean indicating if the offer was filled or not "
    filled: Boolean!
    " boolean indicating if the offer was cancelled or not "
    cancelled: Boolean!
    " boolean indicating if the offer is live or not "
    live: Boolean!
    " the timestamp that offer was removed at"
    removed_timestamp: BigInt
}


    event LogMake(
        bytes32 indexed id,
        bytes32 indexed pair,
        address indexed maker,
        ERC20 pay_gem,
        ERC20 buy_gem,
        uint128 pay_amt,
        uint128 buy_amt,
        uint64 timestamp
    );
*/