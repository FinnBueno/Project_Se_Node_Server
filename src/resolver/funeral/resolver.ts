import { Resolver, Query, Arg } from 'type-graphql';
import { DeceasedResolver } from '../deceased';
import { Deceased } from '../../entities/deceased';
import { Funeral } from '../../entities/funeral';

@Resolver(_of => Deceased)
export class FuneralResolver {

    @Query(_returns => Funeral, { nullable: true })
    async funeral(@Arg('id') id: string): Promise<Funeral> {
        return {
            id,
            deceased: await this.getFakeDeceasedPerson(),
        }
    }

    getFakeDeceasedPerson = () => (new DeceasedResolver()).deceased(String(Math.floor(Math.random() * 10)));

}