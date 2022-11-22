import { Request, Response } from "express";
import { GetUserBalanceUseCase } from "./GetUserBalanceUseCase";


export class GetUserBalanceController {
  async handle(request: Request, response: Response) {
    const { debitedAccountId } = request;

    const getUserBalanceUseCase = new GetUserBalanceUseCase();

    const allTransaction = await getUserBalanceUseCase.execute({
      debitedAccountId,
    });
    return response.json(allTransaction);
  }
}
