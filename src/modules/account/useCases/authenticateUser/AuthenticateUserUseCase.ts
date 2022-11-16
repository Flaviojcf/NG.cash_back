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

    if (!isPasswordMatch) {
      throw new Error("Password invalid");
    }
    const token = sign({ username }, verifyIfUserExists.password, {
      subject: verifyIfUserExists.username,
      expiresIn: "1d",
    });
    return token;
  }
}
