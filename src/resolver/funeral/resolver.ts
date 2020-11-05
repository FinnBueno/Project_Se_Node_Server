import { Resolver, Query, Arg, Ctx, Authorized, Mutation } from 'type-graphql';
import { DeceasedResolver } from '../deceased';
import { Funeral, FuneralModel } from '../../entities/funeral';
import { Context } from '../../types';
import { AccountModel } from '../../entities/auth';

@Resolver(_of => Funeral)
export class FuneralResolver {

    @Query(_returns => [Funeral], { nullable: false })
    @Authorized()
    async funerals(@Ctx() ctx: Context): Promise<Funeral[]> {
        const account = await AccountModel.findById(ctx.decodedToken.id);
        const funerals = await FuneralModel.find({ account }).exec();
        return funerals;
    }

    @Query(_returns => Funeral, { nullable: true })
    @Authorized()
    async funeral(@Ctx() ctx: Context, @Arg('id', { nullable: true }) id: string): Promise<Funeral> {
        return id ? await FuneralModel.findById(id) : null;
    }

    @Mutation(_returns => Funeral, { nullable: false })
    @Authorized()
    async createFuneral(@Ctx() ctx: Context): Promise<Funeral> {
        const account = await AccountModel.findById(ctx.decodedToken.id);
        return await FuneralModel.create({ account });
    }

    getFakeDeceasedPerson = () => (new DeceasedResolver()).deceased(String(Math.floor(Math.random() * 10)));
    getFakeAccount = () => ({  })

}