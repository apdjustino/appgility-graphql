import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
const { Person, personResolvers } = require("./person");
const { Trial, eventResolvers } = require("./event");
const { TrialSchema, trialResolvers } = require("./trial");
const { Schedule } = require("./schedule");

export const schema = makeExecutableSchema({
    typeDefs: [Person, Trial, TrialSchema, Schedule],
    resolvers: [personResolvers, trialResolvers, eventResolvers],
});
