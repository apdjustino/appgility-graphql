import { GraphQLError } from "graphql";
import { checkIfEventHasRuns } from "../../../dataSources/rules/event";
import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers, PersonEvent } from "../../../types";

export const updateEvent: MutationResolvers<ServerContext>["updateEvent"] = async (root, { personId, eventId, updatedEvent }, context, info) => {
    try {
        const { event, trial, person } = context.dataSources;

        const personEvent: PersonEvent = await person.getPersonEvent(personId, eventId);
        personEvent.hostClub = updatedEvent.hostClub;
        personEvent.locationCity = updatedEvent.locationCity;
        personEvent.locationState = updatedEvent.locationState;
        personEvent.status = updatedEvent.status;
        personEvent.trialSite = updatedEvent.trialSite;

        if (updatedEvent.runPrices) {
            const eventHasRuns = await checkIfEventHasRuns(event, trial, eventId);
            if (eventHasRuns) {
                throw new GraphQLError("Cannot update event pricing after runs have been added to event trials");
            }
        }

        const result = await event.updateEvent(eventId, updatedEvent);
        await person.updatePersonEvent(personId, eventId, personEvent);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
