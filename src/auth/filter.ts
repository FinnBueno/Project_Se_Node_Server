import { get } from "lodash";
import { AuthChecker } from "type-graphql";
import { AccountModel } from "../entities/auth";
import { Context } from "../types";

export const authChecker: AuthChecker<Context> = (
    { context },
    // these are roles that are specified on an @Authorized() decorator, to only give certain people access
    _roles
) => {
    // get id from token
    const userId = get(context.decodedToken, 'id', null);
    // find related user
    const user = userId && AccountModel.findById(userId);
    // if user is not null, they're authenticated
    // perhaps later we will check whether or not the given roles apply to this user
    return !!user;
}