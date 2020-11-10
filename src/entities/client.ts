import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The client model' })
export class Client {

    @Field({ nullable: true })
    @Property()
    firstname?: string;

    @Field({ nullable: true })
    @Property()
    firstLetters?: string;

    @Field({ nullable: true })
    @Property()
    lastname?: string;

    @Field({ nullable: true })
    @Property()
    girlname?: string;

    @Field({ nullable: true })
    @Property()
    callname?: string;

    @Field({ nullable: true })
    @Property()
    gender?: string;

    @Field({ nullable: true })
    @Property()
    address?: string;

    @Field({ nullable: true })
    @Property()
    postal?: string;

    @Field({ nullable: true })
    @Property()
    town?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateOfBirth?: Date;

    @Field({ nullable: true })
    @Property()
    phoneNumber?: string;

    @Field({ nullable: true })
    @Property()
    emailAddress?: string;

    @Field({ nullable: true })
    @Property()
    relation?: string;

}
