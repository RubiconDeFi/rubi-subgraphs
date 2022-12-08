import { User } from '../../../generated/schema' 
import { Address } from '@graphprotocol/graph-ts'

export function fetchUser(userAddress: Address): User {

    // attempt to load the user from the store
    let user = User.load(userAddress)

    // if the user is null, create it
    if (user == null) {
        user = new User(userAddress)
        user.save()
    }
    return user as User
}