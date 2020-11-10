import { InputType, Field } from 'type-graphql';

@InputType({ description: 'Final care of deceased person' })
export class PersistFinalCareInput {

    @Field(() => Date, { nullable: true })
    date?: Date;

    @Field({ nullable: true })
    deletePacemaker?: string;

    @Field({ nullable: true })
    location?: string;

    @Field({ nullable: true })
    makeFingerprint?: string;

    @Field({ nullable: true })
    family?: string;

    @Field({ nullable: true })
    clothes?: string;

    @Field({ nullable: true })
    wishesJewelryGlasses?: string;

    @Field({ nullable: true })
    detailsOfCare?: string;

    @Field({ nullable: true })
    makeUpHairstyleWishes?: string;

}
