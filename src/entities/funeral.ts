import { ObjectType, Field, ID } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { Ref } from '../types';
import { Deceased } from './deceased';
import { Account } from './auth';

@ObjectType({ description: 'The funeral model' })
export class Funeral {
    @Field(() => ID)
    id: string;

    @Field(_type => Deceased, { nullable: true })
    @Property({ type: Deceased, required: false })
    deceased?: Deceased

    @Field(_type => Account, { nullable: true })
    @Property({ ref: Account, required: false })
    account?: Ref<Account>;

    @Field(_type => Number, { nullable: true })
    @Property({ required: false })
    lastCreationStep?: number;
}

export const FuneralModel = getModelForClass(Funeral);