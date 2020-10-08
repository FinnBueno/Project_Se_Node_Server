import { InputType, Field } from "type-graphql";
import { Deceased } from "../../entities/deceased";

@InputType()
export class PersistDeceasedInput implements Partial<Deceased> {
    @Field()
    firstname: string;

    @Field()
    lastname: string;
}
