import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Ref } from '../types';
import { Deceased } from './deceased';

@ObjectType({ description: 'The funeral model' })
export class Funeral {
    @Field(() => ID)
    id: string;

    @Field(_type => Deceased)
    @Property({ ref: Deceased, required: true })
    deceased: Ref<Deceased>
}

export const FuneralModel = getModelForClass(Funeral);