import { prisma } from "../../../../database/prismaClient";

interface GetUserTransactionsUseCaseProps {
  debitedAccountId: string;
  type: string;
}

export class GetUserTransactionsUseCase {
  async execute({ debitedAccountId, type }: GetUserTransactionsUseCaseProps) {
    if (type === "TransactionsCredted") {
      const getTransactionsCredited = await prisma.accounts.findMany({
        where: {
          id: debitedAccountId,
        },
        select: {
          TransactionsCredted: true,
        },
      });
      return getTransactionsCredited;
    } else if (type === "TransactionsDebited") {
      const getTransactionsDebited = await prisma.accounts.findMany({
        where: {
          id: debitedAccountId,
        },
        select: {
          TransactionsDebited: true,
        },
      });
      return getTransactionsDebited;
    } else {
      const getAllTransactions = await prisma.accounts.findMany({
        where: {
          id: debitedAccountId,
        },
        select: {
          TransactionsCredted: true,
          TransactionsDebited: true,
        },
      });
      return getAllTransactions;
    }
  }
}
