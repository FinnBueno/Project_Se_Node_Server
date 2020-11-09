import { Resolver, Arg, Mutation, Ctx, Query } from 'type-graphql';
import { Account, AccountModel } from '../../entities/auth/account';
import { LoginInput, RegisterInput } from './input';
import { Context } from '../../types';

@Resolver(_of => Account)
export class AuthResolver {

    @Mutation(_returns => String, { nullable: true })
    async login(
        @Arg('input') { email, password }: LoginInput,
    ): Promise<string> {
        const account = await AccountModel.findOne({ email });

        // this if statement should actually never trigger, the statement above should crash if no account can be found
        if (!account) throw new Error('No account with specified email found');

        const isValid = await account.validatePassword(password);

        if (!isValid) throw new Error('Password is wrong');

        const token = account.generateJWT();
        await AccountModel.updateOne(
            { _id: account.id },
            { currentToken: token }
        );

        return token;
    }

    @Mutation(_returns => Boolean)
    async logout(@Ctx() ctx: Context): Promise<boolean> {
        const account = await AccountModel.findOne({ _id: ctx.decodedToken.id });
        account.currentToken = null;
        await AccountModel.updateOne(
            { email: ctx.decodedToken.email },
            { currentToken: null }
        );
        return true;
    }

    @Query(_returns => Account)
    async loggedIn(@Ctx() ctx: Context): Promise<Account> {
        const supposedAccount = await AccountModel.findOne({ _id: ctx.decodedToken.id });
        if (supposedAccount.currentToken === ctx.token) {
            return supposedAccount;
        }
        return null;
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

        return dbAccount;
    }

    assureDevMode() {
        if (process.env.ENVIRONMENT !== 'development') {
            throw new Error('Account creation is disabled in non-development mode');
        }
    }

}