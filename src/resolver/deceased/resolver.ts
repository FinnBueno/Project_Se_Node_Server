import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Deceased, DeceasedModel } from '../../entities/deceased';
import { FuneralModel } from '../../entities/funeral';
import { PersistDeceasedInput } from './input';

@Resolver(_of => Deceased)
export class DeceasedResolver {

    @Authorized()
    @Query(_returns => Deceased, { nullable: true })
    async personalia(@Arg('id') id: string): Promise<Deceased> {
        return await DeceasedModel.findById(id);
    }

    @Authorized()
    @Mutation(_returns => Deceased)
    async savePersonalia(@Arg('funeralId') id: string, @Arg('personalia') personalia: PersistDeceasedInput): Promise<Deceased> {
        const funeral = await FuneralModel.findById(id);
        let deceased = await DeceasedModel.findById(funeral.deceased);
        // TODO: Save ref, its not working for some reason
        if (!deceased) {
            deceased = await DeceasedModel.create(personalia);
        } else {
            deceased = await DeceasedModel.updateOne(
                { id: deceased.id },
                {
                    ...deceased,
                    ...personalia,
                    id: deceased.id,
                }
            );
        }
        funeral.deceased = deceased;
        await FuneralModel.updateOne({ id: funeral.id }, funeral);
        return deceased;
    }

}