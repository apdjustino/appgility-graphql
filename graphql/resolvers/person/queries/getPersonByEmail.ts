import { BaseError, HttpErrorCodes } from "../../../errors/BaseError";
import { ServerContext } from "../../../server";
import { QueryResolvers } from "../../../types";

export const getPersonByEmail: QueryResolvers<ServerContext>["getPersonByEmail"] = async (root, { email }, context, info) => {
    try {
        const { person } = context.dataSources;
        const result = await person.getByEmail(email);
        return result;
    } catch (error) {
        const err: Error = error as Error;
        throw BaseError(err.message, err, HttpErrorCodes.INTERNAL_SERVER_ERROR, { stack: err.stack });
    }
};
