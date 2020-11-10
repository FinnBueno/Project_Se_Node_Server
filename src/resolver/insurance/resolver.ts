import { Resolver, Query, Arg, Mutation, Authorized } from 'type-graphql';
import { FuneralModel } from '../../entities/funeral';
import { Insurance } from '../../entities/insurance';
import { PersistInsuranceInput } from './input';

@Resolver(_of => Insurance)
export class InsurancesResolver {

    @Authorized()
    @Query(_returns => [Insurance], { nullable: true })
    async insurances(@Arg('id') id: string): Promise<Insurance[]> {
        return (await FuneralModel.findById(id)).insurances;
    }

    @Authorized()
    @Mutation(_returns => Boolean)
    async saveInsurances(@Arg('funeralId') id: string, @Arg('insurances', () => [PersistInsuranceInput]) insurances: PersistInsuranceInput[]): Promise<boolean> {
        const funeral = await FuneralModel.findById(id);
        funeral.insurances = insurances;
        await FuneralModel.findByIdAndUpdate(id, { insurances });
        return true;
    }

}