import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { prisma } from "../database/prismaClient";

interface PayLoadProps {
  sub: string;
}

export async function ensureAuthenticateUser(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    return response.status(401).json({ message: "Token missing" });
  }
  const [, token] = authHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "eae694fc09c8f40eada175e66c50ec14"
    ) as PayLoadProps;
    const username = sub
    const getAccount = await prisma.users.findFirst({
      where: {
        username
      }
    })
    request.debitedAccountId = getAccount?.accounts_id as string;
   
    return next();
  } catch (err) {
    return response.status(401).json({ message: "Invalid token!" });
  }
}
