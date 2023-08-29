# rubi-subgraphs
Subgraphs for the Rubicon Protocol 🌏📖

## Development Status
🔨 = In Progress.

🛠️ = Complete. Additional testing required. 

🦖 = Complete, with tests. 

💀 = Soon to be deprecated.

| Subgraph            | Status | Description                                                                                             |
|---------------------|--------|---------------------------------------------------------------------------------------------------------|
| RubiconV2           |   🦖   | a subgraph to support the Rubicon application                                                           |
| RubiconV2_Optimism  |   🦖   | a subgraph to support the Rubicon application, with legacy events for the v1 protocol data on Optimism  |
| MarketAid           |   🛠️   | a subgraph to support the tracking of asset balances on a market aid instance                           |
| Metrics             |   🔨   | a subgraph to track usage metrics of the Rubicon protocol                                               |
| RubiconLogs         |   🔨   | a subgraph to track low level events for the protocol, regardless of version                            |
| RubiconMarketLight  |   💀   | a subgraph that was used within the rubi-py sdk, soon to be replaced by RubiconV2                       |

## Deployments
| Subgraph            | Network             | Endpoint                                                                                          |
|---------------------|---------------------|---------------------------------------------------------------------------------------------------|
| RubiconV2_Optimism  | `Optimism Mainnet`  | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-mainnet              |
| RubiconV2_Optimism  | `Optimism Goerli`   | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-optimism-goerli               |
| RubiconV2           | `Arbitrum One`      | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-one                  |
| RubiconV2           | `Arbitrum Goerli`   | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-arbitrum-goerli               |
| RubiconV2           | `Polygon Mumbai`    | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconv2-polygon-mumbai                |
| MarketAid           | `Optimism Mainnet`  | https://api.thegraph.com/subgraphs/name/denverbaumgartner/optimismmarketaid                       |
| MarketAid           | `Optimism Goerli`   | https://api.thegraph.com/subgraphs/name/denverbaumgartner/optimismgoerlimarketaid                 |
| Metrics             | `Optimism Mainnet`  | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconmetricsoptimism                  |
| RubiconLogs         | `Optimism Mainnet`  | https://thegraph.com/hosted-service/subgraph/denverbaumgartner/bathtokenlogs                      |
| RubiconMarketLight  | `Optimism Mainnet`  | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconmarket-light-optimism            |
| RubiconMarketLight  | `Optimism Goerli`   | https://api.thegraph.com/subgraphs/name/denverbaumgartner/rubiconmarket-light-op-goerli           |

## Want to contribute? 🫂
check out some good first issues [here](https://github.com/RubiconDeFi/rubi-subgraphs/contribute). there aren't any contributing guidelines, as needed that will change 📈, for now please just try to leave it better than you found it :) [pull requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request) will be accepted ASAP. any contributions will be rewarded 
with a hand drawn NFT. 

**please check out our grants program [here](https://forum.rubicon.finance/c/grants/9) 🚀**

## Deploying
Deploying a subgraph is a straightforward process. Deployment scripts lie within the `package.json` file at the root of the relevant subgraphs directory. The deployment process adheres to the following pattern: 

1. Prepare the subgraph for the relevant network: `npm run prepare:<network name>:<optional identifier>`
2. Ensure the subgraph compiles relevant files correctly: `npm run codegen`
3. Deploy the subgraph to the relevant endpoint: `npm run deploy:<network>:<optional identifier>`

There are three locations that a subgraph is typically deployed to: 1) the hosted service, 2) a remote indexer, 3) a local indexer. When deploying to options 2 & 3, while the deployment pattern will be the same as above, there can be additional steps to take if that is the first time deploying the subgraph. These include: 



1. Creating the subgraph namespace on the indexer: `npm run create:cloud:<network>:<optional identifier>`
2. Deploy to the subgraph namespace on the indexer: `npm run deploy:cloud:<network>:<optional identifier>` *When deploying a subgraph to an existing namespace, its helpful to follow a semantic versioning pattern.*
3. Removing the subgraph namespace on the indexer: `npm run remove:cloud:<network>:<optional identifier>`

## Adding New Networks

Adding a new network is a very simple process. To do so one must simply: 1) create a new `config/<network>.json` file and 2) update the `package.json` to include the relevant deployment scripts. Please follow the established pattern when adding new deployment scripts. 

## Debugging

An in depth overview on debugging can be found [here](https://thegraph.com/docs/en/cookbook/subgraph-debug-forking/). For debugging the hosted service, [this interface](https://cloud.hasura.io/public/graphiql?endpoint=https%3A%2F%2Fapi.thegraph.com%2Findex-node%2Fgraphql) is incredibly helpful for doing. You can provide the query query below, supplemented with the relevant `deployment_id`, to help identify what the error is. 

```graphQL
query HostedServiceDebug {
  indexingStatuses(subgraphs: ["deployement_id"]) {
    node
    subgraph
    synced
    health
    entityCount
    fatalError {
      message
      block {
        number
      }
    }
  }
}
```

For checking the status of any subgraph, an easy query for doing is below. It should provide you the relevant details needed to identify where an error is being caused in your subgraph, enabling you to identify the event or function call that is cauing your problem. 

```graphQL
{
  _meta{
    deployment
    hasIndexingErrors
    block{
      number
      timestamp
      hash
    }
  }
}
```