import { Container, CosmosClient } from '@azure/cosmos'
import { Person } from '../../types'
import { QuerySpec } from '../../types/dataSources'

class Database {
  _connection: CosmosClient

  _getContainer(containerId: string): Container {
    if (!this._connection) {
      this._connection = new CosmosClient({
        endpoint: process.env.COSMOS_ENDPOINT,
        key: process.env.COSMOS_KEY,
      })
    }

    const database = this._connection.database(process.env.COSMOS_DB_ID)
    return database.container(containerId)
  }

  async getItemById<T>(containerId: string, itemId: string, partitionKey: string): Promise<T> {
    const container = this._getContainer(containerId)
    const item = container.item(itemId, partitionKey)
    const { resource } = await item.read()

    return resource as T
  }

  async addItem<T>(containerId: string, item: T): Promise<T> {
    const container = this._getContainer(containerId)
    const createResponse = await container.items.create(item)
    return createResponse.resource
  }

  async updateItem<T>(containerId: string, itemId: string, partitionKey: string, updatedItem: T): Promise<T> {
    const container = this._getContainer(containerId)
    const item = container.item(itemId, partitionKey)
    await item.replace(updatedItem)
    return updatedItem
  }

  async queryItems<T>(containerId: string, query: QuerySpec): Promise<T> {
    const container = this._getContainer(containerId)
    const { resources } = await container.items.query(query).fetchAll()
    const uResources = resources as unknown
    return uResources as T
  }
}

export default Database
