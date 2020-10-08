import { Field, InputType } from "type-graphql";

@InputType()
export class LoginInput {
    @Field()
    public email: string;

    @Field()
    public password: string;
}

@InputType()
export class RegisterInput {
    @Field()
    public email: string;

    @Field()
    public firstname: string;

    @Field()
    public lastname: string;

    @Field()
    public password: string;
}
