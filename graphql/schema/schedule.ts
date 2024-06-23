import gql from "graphql-tag";

const typeDef = gql`
    type ScheduleRun {
        id: String!
        runId: String!
        type: String!
        personId: String!
        personName: String!
        dogId: String!
        callName: String!
        trialId: String!
        agilityClass: AgilityClass!
        level: AgilityAbility
        preferred: Boolean!
        parent: String
        jumpHeight: Int!
        group: String
        createdAt: String
    }
`;

exports.Schedule = typeDef;
