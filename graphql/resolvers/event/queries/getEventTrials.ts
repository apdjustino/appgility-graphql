import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getEventTrials: QueryResolvers<ServerContext>["getEventTrials"] = async (root, { eventId }, context, info) => {
    try {
        const { event } = context.dataSources;
        const result = await event.getEventTrials(eventId);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
