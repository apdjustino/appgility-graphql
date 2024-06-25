import { GraphQLError } from "graphql";

export enum HttpErrorCodes {
    UNPROCESSABLE_ENTITY = "UNPROCESSABLE_ENTITY",
    BAD_REQUEST = "BAD_REQUEST",
    UNAUTHORIZED = "UNAUTHORIZED",
    FORBIDDEN = "FORBIDDEN",
    NOT_FOUND = "NOT_FOUND",
    INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
}

export const BaseError = (message: string, error: Error, code: string, details?: any) =>
    new GraphQLError(message, undefined, undefined, undefined, undefined, error, {
        code,
        ...details,
    });
