import { ObjectType, Field } from 'type-graphql';
import { prop as Property } from '@typegoose/typegoose';

@ObjectType({ description: 'Final care of deceased person' })
export class FinalCare {

    @Field(() => Date, { nullable: true })
    @Property()
    date?: Date;

    @Field({ nullable: true })
    @Property()
    deletePacemaker?: string;

    @Field({ nullable: true })
    @Property()
    location?: string;

    @Field({ nullable: true })
    @Property()
    makeFingerprint?: string;

    @Field({ nullable: true })
    @Property()
    family?: string;

    @Field({ nullable: true })
    @Property()
    clothes?: string;

    @Field({ nullable: true })
    @Property()
    wishesJewelryGlasses?: string;

    @Field({ nullable: true })
    @Property()
    detailsOfCare?: string;

    @Field({ nullable: true })
    @Property()
    makeUpHairStyleWishes?: string;
}
