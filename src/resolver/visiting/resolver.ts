import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Visiting } from '../../entities/visiting';
import { FuneralModel } from '../../entities/funeral';
import { PersistVisitingInput } from './input';

@Resolver(_of => Visiting)
export class VisitingResolver {

    @Authorized()
    @Query(_returns => [Visiting], { nullable: true })
    async visiting(@Arg('id') id: string): Promise<Visiting[]> {
        return (await FuneralModel.findById(id)).visiting;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveVisiting(@Arg('funeralId') id: string, @Arg('visiting', () => [PersistVisitingInput]) visiting: PersistVisitingInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.visiting = visiting;
        await FuneralModel.findByIdAndUpdate(id, { visiting });
        return true;
    }

}