import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Circumstances } from '../../entities/circumstances';
import { FuneralModel } from '../../entities/funeral';
import { PersistCircumstancesInput } from './input';

@Resolver(_of => Circumstances)
export class CircumstancesResolver {

    @Authorized()
    @Query(_returns => Circumstances, { nullable: true })
    async circumstances(@Arg('id') id: string): Promise<Circumstances> {
        return (await FuneralModel.findById(id)).circumstances;
    }

    @Authorized()
    @Mutation(_returns => Circumstances)
    async saveCircumstances(@Arg('funeralId') id: string, @Arg('circumstances') circumstances: PersistCircumstancesInput): Promise<Circumstances> {
        const funeral = await FuneralModel.findById(id);
        funeral.circumstances = circumstances;
        await FuneralModel.findByIdAndUpdate(id, { circumstances });
        return funeral.circumstances;
    }

}