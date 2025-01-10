/* eslint-disable prefer-const */

import { BigDecimal, BigInt } from "@graphprotocol/graph-ts";
import { AnswerUpdated } from "../../generated/Chainlink-ETH-USD/ChainlinkAggregator"
import { feedToTokenConfig } from "../config";
import { Bundle } from "../../generated/schema";

export function handleAnswerUpdated(event: AnswerUpdated): void {

  const receipt = event.receipt

  if (receipt == null) return;

  let amount = event.params.current;
  let price = toBigDecimal(amount, BigInt.fromI32(8)); // all non-eth pairs have 8 decimal places

  let address = feedToTokenConfig.get(event.address.toHexString());

  if (!address) {
    return;
  }

  let bundle = Bundle.load("1")

  if (bundle == null) {
    bundle = new Bundle("1")
    bundle.wethAddress = address;
  }

  bundle.ethPrice = price
  bundle.save()
}

export function toBigDecimal(quantity: BigInt, decimals: BigInt): BigDecimal {
  return quantity.divDecimal(
    BigInt.fromI32(10)
      .pow(decimals.toU32() as u8)
      .toBigDecimal(),
  );
}
