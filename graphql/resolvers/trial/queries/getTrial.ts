import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getTrial: QueryResolvers<ServerContext>["getTrial"] = async (root, { trialId }, context, info) => {
    try {
        const { trial } = context.dataSources;
        const result = await trial.getTrial(trialId);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
