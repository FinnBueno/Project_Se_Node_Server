import { InputType, Field } from "type-graphql";

@InputType()
export class PersistDeceasedInput {
    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    girlname?: string;

    @Field({ nullable: true })
    callname?: string;

    @Field({ nullable: true })
    title?: string;

    @Field({ nullable: true })
    gender?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postal?: string;

    @Field({ nullable: true })
    town?: string;

    @Field({ nullable: true })
    bsn?: string;

    @Field(() => Date, { nullable: true })
    dateOfBirth?: Date;

    @Field({ nullable: true })
    amountOfChildren?: number;

    @Field({ nullable: true })
    amountOfMinors?: number;

    @Field({ nullable: true })
    maritalStatus?: string;

    @Field({ nullable: true })
    religion?: string;
}
