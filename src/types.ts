import { ObjectId } from "mongodb";
import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { Account } from "./entities/auth";

export type Ref<T> = T | ObjectId;

export interface Context {
    decodedToken?: DecodedToken;
    req: ExpressRequest;
    res: ExpressResponse;
    login: (account: Account) => void;
    logout: () => void;
}

export interface DecodedToken {
    id: string;
    email: string;
}
