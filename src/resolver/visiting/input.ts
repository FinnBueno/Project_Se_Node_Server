import { InputType, Field } from "type-graphql";

@InputType()
export class PersistVisitingInput {

    @Field({ nullable: true })
    location?: string;

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    kindOfVisit?: string;

    @Field(() => Date, { nullable: true })
    timeOfArrival?: Date;

    @Field(() => Date, { nullable: true })
    timeOfLeave?: Date;

    @Field({ nullable: true })
    specialNeeds?: string;
}