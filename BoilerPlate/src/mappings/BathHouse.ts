import { Pool } from '../../generated/schema'
import { BathToken } from '../../generated/templates'
import { ZERO_BI, ZERO_BD } from '../utils/constants'
import { LogNewBathToken } from '../../generated/BathHouse/BathHouse'

export function handleLogNewBathToken(event: LogNewBathToken): void {
  
    // create the bath token template
    BathToken.create(event.params.bathTokenAddress)

    // now create the pool entity for the bathtoken, we will initialize the values to zero for now and they will be picked up by the next event
    // it is possible to call the bath token contract directly to get these values, i have built this functionality elsewhere and will import it here if it appears to be helpful 
    // or if anyone asks for it :)
    let pool = new Pool(event.params.bathTokenAddress)
    pool.asset = event.params.underlyingToken
    pool.underlying = ZERO_BI
    pool.underlying_formatted = ZERO_BD
    pool.shares = ZERO_BI
    pool.shares_formatted = ZERO_BD
    pool.outstanding = ZERO_BI
    pool.outstanding_formatted = ZERO_BD
    pool.save()
}