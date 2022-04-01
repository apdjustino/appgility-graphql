import { ValidationRules, verify } from "../dataSources/utils";
import {
    AddTrial,
    MutationAddEventArgs,
    MutationAddEventTrialArgs,
    MutationUpdateEventArgs,
    MutationUpdateEventTrialArgs,
    PersonEvent,
    QueryGetEventArgs,
    QueryGetEventTrialArgs,
    QueryGetEventTrialsArgs,
    UpdateTrial,
} from "../types";
import { DataSources } from "../types/dataSources";
import { v4 as uuidv4 } from "uuid";
import { AuthenticationError, ForbiddenError } from "apollo-server-core";
import { checkIfEventHasRuns } from "../dataSources/rules/event";

const { gql } = require("apollo-server-azure-functions");

const typeDef = gql`
    input CreateNewEventInput {
        eventNumber: String!
        locationCity: String!
        locationState: String!
        trialSite: String!
        hostClub: String!
    }

    input UpdateEventInput {
        id: String!
        eventId: String!
        eventNumber: String!
        type: String!
        locationCity: String!
        locationState: String!
        status: String!
        trialSite: String
        hostClub: String
        runPrices: [Int]
        premiumLink: String
        openingDate: String
        closingDate: String
        trialChairName: String
        trialChairEmail: String
        trialChairPhone: String
    }

    input AddEventTrial {
        eventId: String!
        trialDate: String
        onlineEntries: Int
        mailEntries: Int
        standardClass: Boolean
        standardAbility: [AbilityInput]
        standardPreferred: [AbilityInput]
        jumpersClass: Boolean
        jumpersAbility: [AbilityInput]
        jumpersPreferred: [AbilityInput]
        fastClass: Boolean
        fastAbility: [AbilityInput]
        fastPreferred: [AbilityInput]
        t2bClass: Boolean
        premierStandard: Boolean
        premierJumpers: Boolean
        runLimit: Int
        dayToDayMoveup: Boolean
        judges: [JudgeInput]
    }

    input UpdateEventTrial {
        id: String!
        trialId: String!
        eventId: String!
        type: String!
        trialDate: String
        onlineEntries: Int
        mailEntries: Int
        standardClass: Boolean
        standardAbility: [AbilityInput]
        standardPreferred: [AbilityInput]
        jumpersClass: Boolean
        jumpersAbility: [AbilityInput]
        jumpersPreferred: [AbilityInput]
        fastClass: Boolean
        fastAbility: [AbilityInput]
        fastPreferred: [AbilityInput]
        t2bClass: Boolean
        premierStandard: Boolean
        premierJumpers: Boolean
        runLimit: Int
        dayToDayMoveup: Boolean
        judges: [JudgeInput]
    }

    input AbilityInput {
        label: String!
        value: String!
    }

    type Event {
        id: String!
        eventId: String!
        type: String!
        eventNumber: String!
        locationCity: String!
        locationState: String!
        status: String!
        trialSite: String
        hostClub: String
        runPrices: [Int]
        premiumLink: String
        openingDate: String
        closingDate: String
        trialChairName: String
        trialChairEmail: String
        trialChairPhone: String
        createdAt: String
    }

    type EventTrial {
        id: String!
        trialId: String!
        eventId: String!
        type: String!
        trialDate: String
        onlineEntries: Int
        mailEntries: Int
        standardClass: Boolean
        standardAbility: [Ability]
        standardPreferred: [Ability]
        jumpersClass: Boolean
        jumpersAbility: [Ability]
        jumpersPreferred: [Ability]
        fastClass: Boolean
        fastAbility: [Ability]
        fastPreferred: [Ability]
        t2bClass: Boolean
        premierStandard: Boolean
        premierJumpers: Boolean
        runLimit: Int
        createdAt: String
        dayToDayMoveup: Boolean
        judges: [Judge]
    }

    type Ability {
        label: String!
        value: String!
    }

    extend type Query {
        getEvent(eventId: String!): Event
        getEventTrials(eventId: String!): [EventTrial]
        getEventTrial(trialId: String!, eventId: String!): EventTrial
    }

    extend type Mutation {
        addEvent(data: CreateNewEventInput, personId: String): Event
        updateEvent(eventId: String!, updatedEvent: UpdateEventInput!, personId: String!): Event
        addEventTrial(eventTrial: AddEventTrial!): EventTrial
        updateEventTrial(trialId: String!, eventId: String!, eventTrial: UpdateEventTrial!): EventTrial
    }
`;

const resolvers = {
    Mutation: {
        addEvent: async (_, args: MutationAddEventArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
            const rules: ValidationRules = {
                allowedRoles: ["secretary"],
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const createdAt = new Date().toISOString();
            const { event, person } = dataSources;
            const result = await event.addEvent(args.data, createdAt);
            await person.addPersonTrial(args.data, args.personId, result.eventId, createdAt);
            return result;
        },
        updateEvent: async (_, args: MutationUpdateEventArgs, { dataSources, token }: { dataSources: DataSources; token: string; __ }) => {
            const rules: ValidationRules = {
                allowedRoles: ["secretary"],
                eventId: args.eventId,
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const { event, trial, person } = dataSources;

            const personEvent: PersonEvent = await person.getPersonEvent(args.personId, args.eventId);
            personEvent.hostClub = args.updatedEvent.hostClub;
            personEvent.locationCity = args.updatedEvent.locationCity;
            personEvent.locationState = args.updatedEvent.locationState;
            personEvent.status = args.updatedEvent.status;
            personEvent.trialSite = args.updatedEvent.trialSite;

            if (args.updatedEvent.runPrices) {
                const eventHasRuns = await checkIfEventHasRuns(event, trial, args.eventId);
                if (eventHasRuns) {
                    throw new ForbiddenError("Cannot update event pricing after runs have been added to event trials");
                }
            }

            const result = await event.updateEvent(args.eventId, args.updatedEvent);
            await person.updatePersonEvent(args.personId, args.eventId, personEvent);
            return result;
        },
        addEventTrial: async (_, args: MutationAddEventTrialArgs, { dataSources, token }: { dataSources: DataSources; token: string; __ }) => {
            const rules: ValidationRules = {
                allowedRoles: ["secretary"],
                eventId: args.eventTrial.eventId,
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const createdAt = new Date().toISOString();
            const { event, trial } = dataSources;
            const trialId = uuidv4();
            const result = await event.addEventTrial(trialId, args.eventTrial, createdAt);

            const addTrialInput: AddTrial = {
                eventId: args.eventTrial.eventId,
                trialDate: args.eventTrial.trialDate,
            };
            await trial.addTrial(trialId, addTrialInput);
            return result;
        },
        updateEventTrial: async (_, args: MutationUpdateEventTrialArgs, { dataSources, token }: { dataSources: DataSources; token: string; __ }) => {
            const rules: ValidationRules = {
                allowedRoles: ["secretary"],
                eventId: args.eventId,
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const { event, trial } = dataSources;

            const updateTrialInput: UpdateTrial = {
                id: args.trialId,
                trialId: args.trialId,
                eventId: args.eventId,
                type: "trial",
                trialDate: args.eventTrial.trialDate,
            };

            const result = await event.updateEventTrial(args.trialId, args.eventId, args.eventTrial);
            await trial.updateTrial(args.trialId, updateTrialInput);
            return result;
        },
    },
    Query: {
        getEvent: async (_, args: QueryGetEventArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
            const rules: ValidationRules = {
                allowedRoles: ["exhibitor", "secretary"],
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const { event } = dataSources;
            const result = await event.getEvent(args.eventId);
            return result;
        },
        getEventTrials: async (_, args: QueryGetEventTrialsArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
            const rules: ValidationRules = {
                allowedRoles: ["exhibitor", "secretary"],
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const { event } = dataSources;
            const result = await event.getEventTrials(args.eventId);
            return result;
        },
        getEventTrial: async (_, args: QueryGetEventTrialArgs, { dataSources, token }: { dataSources: DataSources; token: string }, __) => {
            const rules: ValidationRules = {
                allowedRoles: ["exhibitor", "secretary"],
            };

            try {
                await verify(token, rules);
            } catch (e) {
                throw new AuthenticationError(e);
            }

            const { event } = dataSources;
            const result = await event.getEventTrial(args.trialId, args.eventId);
            return result;
        },
    },
};

exports.Trial = typeDef;
exports.eventResolvers = resolvers;
