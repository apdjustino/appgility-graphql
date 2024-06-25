import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getEventTrial: QueryResolvers<ServerContext>["getEventTrial"] = async (root, { eventId, trialId }, context, info) => {
    try {
        const { event } = context.dataSources;
        const result = await event.getEventTrial(trialId, eventId);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
