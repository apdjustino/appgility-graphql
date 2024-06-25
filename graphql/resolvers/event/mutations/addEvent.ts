import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { MutationResolvers } from "../../../types";

export const addEvent: MutationResolvers<ServerContext>["addEvent"] = async (root, { data, personId }, context, info) => {
    try {
        const createdAt = new Date().toISOString();
        const { event, person } = context.dataSources;
        const result = await event.addEvent(data, createdAt);
        await person.addPersonTrial(data, personId, result.eventId, createdAt);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
