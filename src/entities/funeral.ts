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
    @Property({ ref: Deceased, required: false })
    deceased?: Ref<Deceased>

    @Field(_type => Account)
    // TODO: Set required to true once fake deceased person is gone
    @Property({ ref: Account, required: false })
    account?: Ref<Account>
}

export const FuneralModel = getModelForClass(Funeral);