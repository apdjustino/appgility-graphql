import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getPersonDogs: QueryResolvers<ServerContext>["getPersonDogs"] = async (root, { personId }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = person.getPersonDogs(personId);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
