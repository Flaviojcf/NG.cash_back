import { Request, Response } from "express";
import { GetUserTransactionsUseCase } from "./GetUserTransactionsUseCase";

export class GetUserTransactionsController {
  async handle(request: Request, response: Response) {
    const { type } = request?.body;
    const { debitedAccountId } = request;

    const getUserTransactionsUseCase = new GetUserTransactionsUseCase();

    const allTransaction = await getUserTransactionsUseCase.execute({
      debitedAccountId,
      type,
    });
    console.log(allTransaction);
    return response.json(allTransaction);
  }
}
