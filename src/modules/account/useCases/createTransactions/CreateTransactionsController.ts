import { Request, Response } from "express";
import { CreateTransactionsUseCase } from "./CreateTransactionsUseCase";

export class CreateTransactionsController {
  async handle(request: Request, response: Response) {
    const { creditedAccountUser, value } = request.body;
    const { debitedAccountId } = request;
    

    const createTransactionsUseCase = new CreateTransactionsUseCase();

    const transaction = await createTransactionsUseCase.execute({
      creditedAccountUser,
      value,
      debitedAccountId,
    });
    return response.json(transaction);
  }
}
