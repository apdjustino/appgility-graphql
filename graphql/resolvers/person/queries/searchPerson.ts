import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const searchPerson: QueryResolvers<ServerContext>["searchPerson"] = async (root, { query }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = person.findPerson(query);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
