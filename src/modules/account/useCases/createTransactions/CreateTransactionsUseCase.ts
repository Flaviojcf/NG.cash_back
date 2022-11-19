import { prisma } from "../../../../database/prismaClient";

interface CreateTransactionsUseCaseProps {
  debitedAccountId: string;
  creditedAccountUser: string;
  value: number;
}

export class CreateTransactionsUseCase {
  async execute({
    debitedAccountId,
    creditedAccountUser,
    value,
  }: CreateTransactionsUseCaseProps) {
    const userNameCredited = creditedAccountUser;

    const getDebitedAccount = await prisma.accounts.findFirst({
      where: {
        id: debitedAccountId,
      },
    });

    const getCreditedUser = await prisma.users.findFirst({
      where: {
        username: userNameCredited,
      },
    });

    const idCredited = getCreditedUser?.accounts_id as string;

    if (getDebitedAccount?.id === idCredited) {
      throw new Error("Is impossible to transfer to yourself account");
    }

    const getCreditedAccount = await prisma.accounts.findFirst({
      where: {
        id: idCredited,
      },
    });

    const isPossibleTransfer = (getDebitedAccount?.balance as number) >= value;

    if (isPossibleTransfer) {
      await prisma.accounts.update({
        where: {
          id: idCredited,
        },
        data: {
          balance: (getCreditedAccount?.balance as number) + value,
        },
      });
      await prisma.accounts.update({
        where: {
          id: debitedAccountId,
        },
        data: {
          balance: (getDebitedAccount?.balance as number) - value,
        },
      });
    } else {
      throw new Error("Is impossible to transfer more than you has");
    }
    const transaction = await prisma.transactions.create({
      data: {
        value,
        debitedAccountId,
        creditedAccountId: idCredited,
      },
    });
    return transaction;
  }
}
