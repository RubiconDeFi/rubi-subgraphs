import { MarketAid } from "../../generated/templates"
import { Aid } from "../../generated/schema"
import { NotifyMarketAidSpawn } from "../../generated/MarketAidFactory/MarketAidFactory"

export function handleNotifyMarketAidSpawn(event: NotifyMarketAidSpawn): void {
    
    // create the market aid template
    MarketAid.create(event.params.newInstance)
    
    // create the market aid entity
    let aid = new Aid(event.params.newInstance)
    aid.created = event.block.timestamp
    aid.save()

}