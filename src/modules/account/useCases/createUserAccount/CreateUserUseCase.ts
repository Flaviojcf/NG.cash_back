import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateUserUseCaseProps {
  username: string;
  password: string;
}

export class CreateUserUseCase {
  async execute({ username, password }: CreateUserUseCaseProps) {
    const accountAlreadyExists = await prisma.users.findFirst({
      where: {
        username,
      },
    });
    if (accountAlreadyExists) {
      throw new Error("Account already exists");
    } else {
      const isPasswordInCorrectFormat =
        password.search(".*(?=.{8,}).*") !== -1 &&
        password.search(".*[A-Z].*") !== -1 &&
        password.search(".*[0-9].*") !== -1;

      const isUsernameInCorrectFormat = username.search(".*(?=.{3,}).*") !== -1;

      if (!isPasswordInCorrectFormat) {
        throw new Error("Password in wrong format");
      } else if (!isUsernameInCorrectFormat) {
        throw new Error("Username in wrong format");
      }

      const hashPassword = await hash(password, 10);
      const account = await prisma.accounts.create({
        data: {
          balance: 100,
        },
      });

      const user = await prisma.users.create({
        data: {
          username,
          password: hashPassword,
          accounts_id: account.id,
        },
      });

      return user;
    }
  }
}
