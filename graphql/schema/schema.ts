import * as path from "path";
import { loadFilesSync } from "@graphql-tools/load-files";
import { mergeTypeDefs } from "@graphql-tools/merge";
import { print } from "graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { authDirectiveTransformer } from "../directives/auth";
import { eventResolvers } from "../resolvers/event";
import { personResolvers } from "../resolvers/person";
import { trialResolvers } from "../resolvers/trial";

const transformer = authDirectiveTransformer();

const typeDefs = loadFilesSync(path.join(__dirname, "."), {
    extensions: ["graphql"],
});

const typeDefsAst = print([...typeDefs] as any);

const typeDefsFinal = mergeTypeDefs([...typeDefsAst]);

const rawSchema = makeExecutableSchema({
    typeDefs: typeDefsFinal,
    resolvers: [personResolvers, trialResolvers, eventResolvers],
});

export const schema = transformer(rawSchema);
