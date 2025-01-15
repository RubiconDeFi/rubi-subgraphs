/* eslint-disable prefer-const */

import { BigInt } from "@graphprotocol/graph-ts";
import { AnswerUpdated } from "../../generated/Chainlink-ETH-USD/ChainlinkAggregator"
import { feedToTokenConfig } from "../config";
import { fetchToken, toBigDecimal } from "./helpers";

export function handleAnswerUpdated(event: AnswerUpdated): void {

  const receipt = event.receipt

  if (receipt == null) return;

  let amount = event.params.current;
  let price = toBigDecimal(amount, BigInt.fromI32(8)); // all non-eth pairs have 8 decimal places

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
