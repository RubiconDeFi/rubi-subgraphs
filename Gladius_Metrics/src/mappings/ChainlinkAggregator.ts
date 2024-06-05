import { BigInt } from "@graphprotocol/graph-ts";
import { AnswerUpdated } from "../../generated/Chainlink-ETH-USD/ChainlinkAggregator"
import { fetchToken, toBigDecimal } from "../utils/entities/token";
import { feedToTokenConfig } from "../config";

export function handleAnswerUpdated(event: AnswerUpdated): void {
  if (!event.receipt) {
    return;
  }

  let amount = event.params.current;
  let price = toBigDecimal(amount, new BigInt(8)); // all non-eth pairs have 8 decimal places
  
  let addresses = feedToTokenConfig.get(event.address);

  if (!addresses) {
    return;
  }

  for (let i: i32 = 0; i < addresses.length; i++) {
    let token = fetchToken(addresses[i])
    token.currentPrice = price;
    token.save()
  }
}