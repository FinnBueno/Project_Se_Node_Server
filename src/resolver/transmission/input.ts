import { InputType, Field } from "type-graphql";
import { DateScalarMode } from "type-graphql/dist/schema/build-context";

@InputType({ description: 'Transmission object' })
export class PersistTransmissionInput {
    @Field({ nullable: true })
    date?: Date;

    @Field({ nullable: true })
    by?: string;

    @Field({ nullable: true })
    from?: string;

    @Field({ nullable: true })
    to?: string;

    @Field({ nullable: true })
    fromAddress?: string;

    @Field({ nullable: true })
    toAddress?: string;

    @Field({ nullable: true })
    fromPlace?: string;

    @Field({ nullable: true })
    toPlace?: string;
}