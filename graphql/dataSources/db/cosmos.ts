import { Container, CosmosClient} from '@azure/cosmos'

class Database {

  _connection: CosmosClient

  _getContainer(containerId: string): Container {
    if (!this._connection) {
      this._connection = new CosmosClient({ 
        endpoint: process.env.COSMOS_ENDPOINT,
        key: process.env.COSMOS_KEY
      })
    }

    const database = this._connection.database(process.env.COSMOS_DB_ID)
    return database.container(containerId)
  }

  async getItemById(containerId: string, itemId: string, partitionKey: string) {
    const container = this._getContainer(containerId)    
    const item = container.item(itemId, partitionKey)    
    const { resource } = await item.read()
    
    return resource
  }
}

export default Database