import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { PaginatedRunResponse, QueryResolvers } from "../../../types";

export const getTrialRunsPaginated: QueryResolvers<ServerContext>["getTrialRunsPaginated"] = async (root, args, context, info) => {
    try {
        const { trial } = context.dataSources;
        const { resources, continuationToken, hasMoreResults } = await trial.getTrialRunsPaginated(
            args.trialId,
            args.agilityClass,
            args.level,
            args.jumpHeight,
            args.preferred,
            args.regular,
            args.search,
            args.continuationToken,
        );
        const response: PaginatedRunResponse = {
            runs: resources,
            continuationToken,
            hasMoreResults,
        };

        return response;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
