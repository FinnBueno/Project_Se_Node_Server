import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'The visiting model' })
export class Visiting {

    @Field({ nullable: true })
    @Property()
    location?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    kindOfVisit?: string;

    @Field(() => Date, { nullable: true })
    @Property()
    timeOfArrival?: Date;

    @Field(() => Date, { nullable: true })
    @Property()
    timeOfLeave?: Date;

    @Field({ nullable: true })
    @Property()
    specialNeeds?: string;
}
