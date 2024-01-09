import { dataSource, Address } from "@graphprotocol/graph-ts";
import { emitFee } from "../../../generated/RubiconMarket/RubiconMarket"
import { RubiconMarket } from "../../../generated/RubiconMarket/RubiconMarket";
import { ZERO_ADDRESS, RUBICON_MARKET_CONTRACT_ADDRESS } from "../../prices/common/constants"
import { readValue } from "../../prices/common/utils";

export function isFeeMakerRebate(event: emitFee): boolean {
    let network = dataSource.network();
    const rubiconMarketAddress = RUBICON_MARKET_CONTRACT_ADDRESS.get(network)

    if (!rubiconMarketAddress) {
        return false // TODO: should probably find a better way to handle this error
    }

    const RubiconMarketContract = RubiconMarket.bind(rubiconMarketAddress)

    if (!RubiconMarketContract) {
        return false; // TODO: should probably find a better way to handle this error
    }

    let rubiconMarketFeeTo: Address = readValue<Address>(
      RubiconMarketContract.try_getFeeTo(),
      ZERO_ADDRESS
    )

    // if the feeTo field from the event is the same as 
    // feeTo value stored in RubiconMarket,
    // then we know the fee was sent to the protocol and
    // not to a maker
    if (event.params.feeTo == rubiconMarketFeeTo){
        return false // this emitFee event is NOT a maker rebate
    }
    else {
        return true // this emitFee event is a maker rebate
    }
}