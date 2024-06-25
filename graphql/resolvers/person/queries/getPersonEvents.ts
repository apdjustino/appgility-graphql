import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { PersonEvent, QueryResolvers } from "../../../types";

export const getPersonEvents: QueryResolvers<ServerContext>["getPersonEvents"] = async (root, { personId }, context, info) => {
    try {
        const { person, event } = context.dataSources;
        const result = await person.getPersonEvents(personId);
        const personEvents = await Promise.all(
            result.map(async (personEvent) => {
                const newPersonEvent: PersonEvent = { ...personEvent };
                const trials = await event.getEventTrials(personEvent.eventId);
                newPersonEvent.trialDates = trials.map((trial) => trial.trialDate);
                return newPersonEvent;
            }),
        );
        return personEvents;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
