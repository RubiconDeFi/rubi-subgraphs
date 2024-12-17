import { User } from "../../../generated/schema";
import { Bytes } from '@graphprotocol/graph-ts'

export function getUser(address: Bytes): User {

    let user = User.load(address);

    if (!user) {
        user = new User(address);
        user.save();
    }
    return user as User;
}