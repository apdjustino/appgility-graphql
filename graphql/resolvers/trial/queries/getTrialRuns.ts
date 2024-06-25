import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getTrialRuns: QueryResolvers<ServerContext>["getTrialRuns"] = async (root, { trialId }, context, info) => {
    try {
        const { trial } = context.dataSources;
        const runs = await trial.getTrialRuns(trialId);
        return runs;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
