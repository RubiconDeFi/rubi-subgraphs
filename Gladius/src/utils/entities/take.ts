import { Take } from "../../../generated/schema";
import { Bytes } from '@graphprotocol/graph-ts'

export function getTake(id: Bytes): Take {

    let take = Take.load(id);

    if (!take) {
        take = new Take(id);
        take.save();
    }
    return take as Take;
}