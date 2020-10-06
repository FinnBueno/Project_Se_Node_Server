import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';

@ObjectType({ description: 'The deceased model' })
export class Deceased {
    @Field(() => ID)
    id: string;

    @Field()
    @Property()
    firstname: string;

    @Field()
    @Property()
    lastname: string;
}

export const DeceasedModel = getModelForClass(Deceased);