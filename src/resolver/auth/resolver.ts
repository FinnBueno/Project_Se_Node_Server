import { Resolver, Arg, Mutation, Ctx } from 'type-graphql';
import { Account, AccountModel } from '../../entities/auth/account';
import { LoginInput, RegisterInput } from './input';
import { Context } from '../../types';

@Resolver(_of => Account)
export class AuthResolver {

    @Mutation(_returns => Account, { nullable: true })
    async login(
        @Arg('input') { email, password }: LoginInput,
        @Ctx() ctx: Context,
    ): Promise<Account> {
        const account = await AccountModel.findOne({ email });

        // this if statement should actually never trigger, the statement above should crash if no account can be found
        if (!account) throw new Error('No account with specified email found');

        const isValid = await account.validatePassword(password);

        if (!isValid) throw new Error('Password is wrong');

        ctx.login(account);

        return account;
    }

    @Mutation(_returns => Boolean)
    async logout(@Ctx() ctx: Context): Promise<boolean> {
        ctx.logout();
        return true;
    }

    @Mutation(_returns => Account, { nullable: true })
    async register(
        @Arg('input') input: RegisterInput,
        @Ctx() ctx: Context
    ): Promise<Account> {
        this.assureDevMode();

        const account = new Account();
        account.firstname = input.firstname;
        account.lastname = input.lastname;
        account.email = input.email;

        await account.setPassword(input.password);

        const dbAccount = await AccountModel.create(account);

        ctx.login(dbAccount);

        return dbAccount;
    }

    assureDevMode() {
        if (process.env.ENVIRONMENT !== 'development') {
            throw new Error('Account creation is disabled in non-development mode');
        }
    }

}