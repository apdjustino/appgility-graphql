import { Container, CosmosClient, SqlQuerySpec, FeedOptions, FeedResponse } from "@azure/cosmos";

class Database {
    _connection: CosmosClient;

    _getContainer(containerId: string): Container {
        if (!this._connection) {
            this._connection = new CosmosClient({
                endpoint: process.env.COSMOS_ENDPOINT,
                key: process.env.COSMOS_KEY,
            });
        }

        const database = this._connection.database(process.env.COSMOS_DB_ID);
        return database.container(containerId);
    }

    async getItemById<T>(containerId: string, itemId: string, partitionKey: string): Promise<T> {
        const container = this._getContainer(containerId);
        const item = container.item(itemId, partitionKey);
        const { resource } = await item.read();

        return resource as T;
    }

    async addItem<T>(containerId: string, item: T): Promise<T> {
        const container = this._getContainer(containerId);
        const createResponse = await container.items.create(item);
        return createResponse.resource;
    }

    async updateItem<T>(containerId: string, itemId: string, partitionKey: string, updatedItem: T): Promise<T> {
        const container = this._getContainer(containerId);
        const item = container.item(itemId, partitionKey);
        await item.replace(updatedItem);
        return updatedItem;
    }

    async deleteItem<T>(containerId: string, itemId: string, partitionKey: string): Promise<T> {
        const container = this._getContainer(containerId);
        const item = container.item(itemId, partitionKey);
        const deletedItem = await item.delete<T>();
        return deletedItem.resource;
    }

    async queryItems<T>(containerId: string, query: SqlQuerySpec, options: FeedOptions): Promise<T[]> {
        const container = this._getContainer(containerId);
        const { resources } = await container.items.query<T>(query, options).fetchAll();
        return resources;
    }

    async queryPaginatedItems<T>(containerId: string, query: SqlQuerySpec, options: FeedOptions): Promise<FeedResponse<T>> {
        const container = this._getContainer(containerId);
        const response = await container.items.query<T>(query, options).fetchNext();
        return response;
    }
}

export default Database;
