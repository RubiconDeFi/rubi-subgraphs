import { ZERO_BI } from "../utils/constants";
import { Bytes } from "@graphprotocol/graph-ts";
import { updateCandles } from "../utils/entities/candles";
import { getTransaction } from "../utils/entities/transaction";
import { Take } from "../../generated/schema";
import { Fill } from '../../generated/ExclusiveDutchOrderReactor/ExclusiveDutchOrderReactor';
import { getUser } from "../utils/entities/user";
import { getPair } from "../utils/entities/pair";

export function handleTake(event: Fill): void {
    
    // get the transaction entity 
    let transaction = getTransaction(event)

    // get the taker and from entities (users)
    let taker = getUser(event.params.filler)
    let from = getUser(event.params.swapper)

    // get the pair associated with the take 
    let pair = getPair(event.params.pay_gem, event.params.buy_gem)

    // create the take entity
    let take = new Take(event.transaction.hash.concat(Bytes.fromByteArray(Bytes.fromBigInt(event.logIndex))))
    take.transaction = transaction.id
    take.timestamp = event.block.timestamp
    take.index = event.logIndex
    take.taker = taker.id
    take.from_address = from.id
    take.pair = pair.id
    take.take_gem = offer.pay_gem
    take.give_gem = offer.buy_gem
    take.take_amt = event.params.take_amt
    take.give_amt = event.params.give_amt
    take.save()

    // update the candle entities 
    updateCandles(take)
}
