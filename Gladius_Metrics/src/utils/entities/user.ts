import { User } from '../../../generated/schema' 
import { Address, Bytes } from '@graphprotocol/graph-ts'
import { fetchRubicon } from './rubicon'
import { ONE_BI } from '../constants'

export function fetchUser(userAddress: Bytes): User {

    // attempt to load the user from the store
    let user = User.load(userAddress)

    // if the user is null, create it
    if (user == null) {

        // load in the rubicon entity and increment the total users
        let rubicon = fetchRubicon()
        rubicon.total_users = rubicon.total_users.plus(ONE_BI)
        rubicon.save()

        user = new User(userAddress)
        user.save()
    }
    return user as User
}