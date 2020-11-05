import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { DecodedToken } from '../../types';

@ObjectType({ description: 'A user account that allows someone to log in' })
export class Account {

    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    email: string;

    @Field()
    @Property()
    firstname: string;

    @Field()
    @Property()
    lastname: string;

    @Property()
    currentToken?: string;

    @Property()
    // fear not, this is hashed and well, only saved as a string
    password: string;

    public generateJWT() {
        const token = jwt.sign({
            email: this.email,
            id: this.id,
        } as DecodedToken, process.env.SESSION_SECRET);
        return token;
    }

    public async validatePassword(password: string) {
        return bcrypt.compare(password, this.password)
    }

    public async setPassword(password: string) {
        this.password = await bcrypt.hash(password, 10);
    }

    public invalidateToken() {
        this.currentToken = null;
    }
}

export const AccountModel = getModelForClass(Account);