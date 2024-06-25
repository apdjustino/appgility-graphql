import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getPersonById: QueryResolvers<ServerContext>["getPersonById"] = async (root, { personId }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = await person.getById(personId);

        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
