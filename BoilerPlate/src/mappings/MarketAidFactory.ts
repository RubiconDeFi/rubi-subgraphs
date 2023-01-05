import { MarketAid } from "../../generated/templates"
import { NotifyMarketAidSpawn } from "../../generated/MarketAidFactory/MarketAidFactory"

export function handleNotifyMarketAidSpawn(event: NotifyMarketAidSpawn): void {
    
    // create the market aid template
    MarketAid.create(event.params.newInstance)
    
}