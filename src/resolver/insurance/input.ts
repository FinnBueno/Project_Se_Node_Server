import { ObjectType, Field, InputType } from 'type-graphql';

@InputType({ description: 'Insurance object' })
export class PersistInsuranceInput {

    @Field({ nullable: true })
    company?: string;

    @Field({ nullable: true })
    policynumber?: string;

}
