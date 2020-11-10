import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The deceased model' })
export class Deceased {

    @Field({ nullable: true })
    @Property()
    firstname?: string;

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
    title?: string;

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

    @Field({ nullable: true })
    @Property()
    bsn?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    dateOfBirth?: Date;

    @Field({ nullable: true })
    @Property()
    amountOfChildren?: number;

    @Field({ nullable: true })
    @Property()
    amountOfMinors?: number;

    @Field({ nullable: true })
    @Property()
    maritalStatus?: string;

    @Field({ nullable: true })
    @Property()
    religion?: string;
}

// export const DeceasedModel = getModelForClass(Deceased);