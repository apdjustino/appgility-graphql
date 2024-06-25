import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";
const { Person, personResolvers } = require("./person");
const { Trial, eventResolvers } = require("./event");
const { TrialSchema, trialResolvers } = require("./trial");
const { Schedule } = require("./schedule");
import { authDirectiveTransformer } from "../directives/auth";

const transformer = authDirectiveTransformer();

const rawSchema = makeExecutableSchema({
    typeDefs: [Person, Trial, TrialSchema, Schedule],
    resolvers: [personResolvers, trialResolvers, eventResolvers],
});

export const schema = transformer(rawSchema);
