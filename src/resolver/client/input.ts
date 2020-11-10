import { InputType, Field } from "type-graphql";

@InputType()
export class PersistClientInput {
    @Field({ nullable: true })
    firstname?: string;

    @Field({ nullable: true })
    firstLetters?: string;

    @Field({ nullable: true })
    lastname?: string;

    @Field({ nullable: true })
    girlname?: string;

    @Field({ nullable: true })
    callname?: string;

    @Field({ nullable: true })
    gender?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postal?: string;

    @Field({ nullable: true })
    town?: string;

    @Field(() => Date, { nullable: true })
    dateOfBirth?: Date;

    @Field({ nullable: true })
    phoneNumber?: string;

    @Field({ nullable: true })
    emailAddress?: string;

    @Field({ nullable: true })
    relation?: string;
}