import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Transmission object' })
export class Transmission {

    @Field({ nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    by?: string;

    @Field({ nullable: true })
    @Property()
    from?: string;

    @Field({ nullable: true })
    @Property()
    to?: string;

    @Field({ nullable: true })
    @Property()
    fromAddress?: string;

    @Field({ nullable: true })
    @Property()
    toAddress?: string;

    @Field({ nullable: true })
    @Property()
    fromPlace?: string;

    @Field({ nullable: true })
    @Property()
    toPlace?: string;
}
