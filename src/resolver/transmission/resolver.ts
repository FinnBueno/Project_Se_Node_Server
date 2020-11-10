import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Transmission } from '../../entities/transmission';
import { PersistTransmissionInput } from './input';

@Resolver(_of => Transmission)
export class TransmissionsResolver {

    @Authorized()
    @Query(_returns => [Transmission], { nullable: true })
    async transmissions(@Arg('id') id: string): Promise<Transmission[]> {
        return (await FuneralModel.findById(id)).transmissions;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveTransmissions(@Arg('funeralId') id: string, @Arg('transmissions', () => [PersistTransmissionInput]) transmissions: PersistTransmissionInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.transmissions = transmissions;
        await FuneralModel.findByIdAndUpdate(id, { transmissions });
        return true;
    }

}