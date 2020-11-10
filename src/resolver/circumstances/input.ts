import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Circumstances of death' })
export class PersistCircumstancesInput {

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    time?: string;

    @Field({ nullable: true })
    address?: string;

    @Field({ nullable: true })
    postal?: string;

    @Field({ nullable: true })
    town?: string;

    @Field({ nullable: true })
    cause?: string;

    @Field({ nullable: true })
    reasonForProcrastination?: string;

}
