import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../../database/prismaClient";

interface AuthenticateUserUseCasePros {
  username: string;
  password: string;
}
export class AuthenticateUserUseCase {
  async execute({ username, password }: AuthenticateUserUseCasePros) {
    const verifyIfUserExists = await prisma.users.findFirst({
      where: {
        username,
      },
    });
    if (!verifyIfUserExists) {
      throw new Error("User doesn't exists");
    }
    const isPasswordMatch = await compare(
      password,
      verifyIfUserExists.password
    );

    const id = verifyIfUserExists.accounts_id as string;

    const getAccount = await prisma.accounts.findFirst({
      where: {
        id,
      },
    });

    if (!isPasswordMatch) {
      throw new Error("Password invalid");
    }
    const token = sign({ username }, 'eae694fc09c8f40eada175e66c50ec14', {
      subject: verifyIfUserExists.username,
      expiresIn: 60 * 60 * 24,
    });
    return { token: token, account: getAccount, username:verifyIfUserExists.username };
  }
}
