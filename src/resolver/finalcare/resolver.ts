import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FinalCare } from '../../entities/finalcare';
import { FuneralModel } from '../../entities/funeral';
import { PersistFinalCareInput } from './input';

@Resolver(_of => FinalCare)
export class FinalCareResolver {

    @Authorized()
    @Query(_returns => FinalCare, { nullable: true })
    async finalcare(@Arg('id') id: string): Promise<FinalCare> {
        return (await FuneralModel.findById(id)).finalcare;
    }

    @Authorized()
    @Mutation(_returns => FinalCare)
    async saveFinalCare(@Arg('funeralId') id: string, @Arg('finalcare') finalcare: PersistFinalCareInput): Promise<FinalCare> {
        const funeral = await FuneralModel.findById(id);
        funeral.finalcare = finalcare;
        await FuneralModel.findByIdAndUpdate(id, { finalcare });
        return funeral.finalcare;
    }

}