import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { Client } from '../../entities/client';
import { FuneralModel } from '../../entities/funeral';
import { PersistClientInput } from './input';

@Resolver(_of => Client)
export class ClientResolver {

    @Authorized()
    @Query(_returns => Client, { nullable: true })
    async client(@Arg('id') id: string): Promise<Client> {
        return (await FuneralModel.findById(id)).client;
    }

    @Authorized()
    @Mutation(_returns => Client)
    async saveClient(@Arg('funeralId') id: string, @Arg('client') client: PersistClientInput): Promise<Client> {
        const funeral = await FuneralModel.findById(id);
        funeral.client = client;
        await FuneralModel.findByIdAndUpdate(id, { client });
        return funeral.client;
    }

}