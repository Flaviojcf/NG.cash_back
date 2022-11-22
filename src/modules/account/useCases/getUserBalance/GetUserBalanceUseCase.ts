import { prisma } from "../../../../database/prismaClient";

interface GetUserBalanceUseCaseProps {
  debitedAccountId: string;
}

export class GetUserBalanceUseCase {
  async execute({ debitedAccountId }: GetUserBalanceUseCaseProps) {
    const response = await prisma.accounts.findFirst({
      where: {
        id: debitedAccountId,
      },
    });
    return response?.balance;
  }
}
