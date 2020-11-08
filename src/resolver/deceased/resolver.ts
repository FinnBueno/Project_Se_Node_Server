import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Deceased } from '../../entities/deceased';
import { FuneralModel } from '../../entities/funeral';
import { PersistDeceasedInput } from './input';

@Resolver(_of => Deceased)
export class DeceasedResolver {

    @Authorized()
    @Query(_returns => Deceased, { nullable: true })
    async personalia(@Arg('id') id: string): Promise<Deceased> {
        return (await FuneralModel.findById(id)).deceased;
    }

    @Authorized()
    @Mutation(_returns => Deceased)
    async savePersonalia(@Arg('funeralId') id: string, @Arg('personalia') personalia: PersistDeceasedInput): Promise<Deceased> {
        const funeral = await FuneralModel.findById(id);
        funeral.deceased = personalia;
        await FuneralModel.findByIdAndUpdate(id, { deceased: funeral.deceased });
        return funeral.deceased;
    }

}