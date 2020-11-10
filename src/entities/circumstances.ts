import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Circumstances of death' })
export class Circumstances {

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    time?: string;

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
    cause?: string;

    @Field({ nullable: true })
    @Property()
    reasonForProcrastination?: string;

}
