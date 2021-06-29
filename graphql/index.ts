const { ApolloServer, gql } = require('apollo-server-azure-functions');
import { schema } from './schema/schema'
import Person from './dataSources/Person'
import { DataSources } from './types/dataSources';
import Trial from './dataSources/Trial';

const server = new ApolloServer({ 
    schema,
    dataSources: (): DataSources => ({
      person: new Person(),
      trial: new Trial()
    })
});
exports.graphqlHandler = server.createHandler();