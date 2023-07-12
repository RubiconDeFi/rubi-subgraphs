import { Rubicon } from "../../../generated/schema"
import { Bytes, BigInt } from "@graphprotocol/graph-ts"
import { ZERO_BD, ZERO_BI } from "../constants"

export function fetchRubicon(): Rubicon {

    // set a default rubicon entity that will be used for all higher level aggregations
    let rubicon = Rubicon.load(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString("420"))))
    if (rubicon == null) {
        rubicon = new Rubicon(Bytes.fromByteArray(Bytes.fromBigInt(BigInt.fromString("420"))))
        rubicon.total_users = ZERO_BI
        rubicon.total_transactions = ZERO_BI
        rubicon.total_volume_usd = ZERO_BD
        rubicon.total_maker_rebate_volume_usd = ZERO_BD
        rubicon.save()
    }
    return rubicon as Rubicon
}