import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Deceased, DeceasedModel } from '../../entities/deceased';
import { PersistDeceasedInput } from './input';

@Resolver(_of => Deceased)
export class DeceasedResolver {

    @Authorized()
    @Query(_returns => Deceased, { nullable: true })
    async deceased(@Arg('id') id: string): Promise<Deceased> {
        return await DeceasedModel.findById(id);
    }

    @Authorized()
    @Query(_returns => [Deceased])
    async allDeceased(): Promise<Deceased[]> {
        return await DeceasedModel.find();
    }

    @Authorized()
    @Mutation(_returns => Deceased)
    async persistDeceased(
        @Arg('input', () => PersistDeceasedInput)
        { firstname, lastname }: PersistDeceasedInput
    ): Promise<Deceased> {
        const { _id: id } = await DeceasedModel.create({
            firstname,
            lastname,
        });
        return await DeceasedModel.findById(id).exec();
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async deleteDeceased(
        @Arg('id') id: string
    ): Promise<boolean> {
        const deceased = await DeceasedModel.findById(id)
        if (deceased) {
            await DeceasedModel.findById(id).remove().exec();
            return true;
        }
        return false;
    }

}