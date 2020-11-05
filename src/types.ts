import { ObjectId } from "mongodb";
import { Request as ExpressRequest, Response as ExpressResponse } from 'express';
import { Account } from "./entities/auth";

export type Ref<T> = T | ObjectId;

export interface Context {
    token: string;
    decodedToken?: DecodedToken;
    req: ExpressRequest;
    res: ExpressResponse;
}

export interface DecodedToken {
    id: string;
    email: string;
}
