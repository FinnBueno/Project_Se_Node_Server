import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Visiting } from '../../entities/visiting';
import { FuneralModel } from '../../entities/funeral';
import { PersistVisitingInput } from './input';

@Resolver(_of => Visiting)
export class VisitingResolver {

    @Authorized()
    @Query(_returns => Visiting, { nullable: true })
    async visiting(@Arg('id') id: string): Promise<Visiting> {
        return (await FuneralModel.findById(id)).visiting;
    }

    @Authorized()
    @Mutation(_returns => Visiting)
    async savePersonalia(@Arg('funeralId') id: string, @Arg('visiting') visiting: PersistVisitingInput): Promise<Visiting> {
        const funeral = await FuneralModel.findById(id);
        funeral.visiting = visiting;
        await FuneralModel.findByIdAndUpdate(id, { visiting: funeral.visiting });
        return funeral.visiting;
    }

}