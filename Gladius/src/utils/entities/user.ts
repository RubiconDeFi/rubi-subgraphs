import { User } from "../../../generated/schema";
import { Address } from '@graphprotocol/graph-ts'

export function getUser(address: Address): User {

    let user = User.load(address);

    if (!user) {
        user = new User(address);
        user.save();
    }
    return user as User;
}