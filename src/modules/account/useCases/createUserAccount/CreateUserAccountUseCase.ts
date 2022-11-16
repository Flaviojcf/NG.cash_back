import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateUserAccountUseCaseProps {
  username: string;
  password: string;
}

export class CreateUserAccountUseCase {
  async execute({ username, password }: CreateUserAccountUseCaseProps) {
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
      }
      else if(!isUsernameInCorrectFormat) {
        throw new Error("Username in wrong format");
      }

      const hashPassword = await hash(password, 10);
      const account = await prisma.users.create({
        data: {
          username,
          password: hashPassword,
        },
      });
      return account;
    }
  }
}
