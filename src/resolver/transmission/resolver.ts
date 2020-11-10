import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Transmission } from '../../entities/transmission';
import { PersistTransmissionInput } from './input';

@Resolver(_of => Transmission)
export class TransmissionResolver {

    @Authorized()
    @Query(_returns => Transmission, { nullable: true })
    async transmission(@Arg('id') id: string): Promise<Transmission> {
        return (await FuneralModel.findById(id)).transmission;
    }

    @Authorized()
    @Mutation(_returns => Transmission)
    async saveTransmission(@Arg('funeralId') id: string, @Arg('transmission') transmission: PersistTransmissionInput): Promise<Transmission> {
        const funeral = await FuneralModel.findById(id);
        funeral.transmission = transmission;
        await FuneralModel.findByIdAndUpdate(id, { transmission });
        return funeral.transmission;
    }

}