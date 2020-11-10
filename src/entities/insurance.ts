import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Insurance object' })
export class Insurance {

    @Field({ nullable: true })
    @Property()
    company?: string;

    @Field({ nullable: true })
    @Property()
    policynumber?: string;

}
