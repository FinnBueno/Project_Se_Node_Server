import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Deceased } from '../../entities/deceased';
import { PersistDeceasedInput } from './input';

@Resolver(_of => Deceased)
export class DeceasedResolver {

    @Query(_returns => Deceased, { nullable: true })
    async deceased(@Arg('id') id: string): Promise<Deceased> {
        return {
            id,
            firstname: 'First name',
            lastname: 'Last name',
        }
    }

    @Query(_returns => [Deceased])
    async allDeceased(): Promise<Deceased[]> {
        const numbers = Array.from(
            Array(5).keys()
        );
        return numbers.map(id => (
            {
                id: String(id),
                firstname: `First name ${id}`,
                lastname: `Last name ${id}`,
            }
        ));
    }

    @Mutation(_returns => Deceased)
    async persistDeceased(
        @Arg('input', () => PersistDeceasedInput)
        { id, firstname, lastname }: PersistDeceasedInput
    ): Promise<Deceased> {
        return {
            id,
            firstname,
            lastname
        }
    }

}