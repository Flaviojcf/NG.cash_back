import { Request, Response } from "express";
import { CreateUserAccountUseCase } from "./CreateUserAccountUseCase";

export class CreateUserAccountController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const createUserAccountUseCase = new CreateUserAccountUseCase();

    try {
      const result = await createUserAccountUseCase.execute({
        username,
        password,
      });
      return response.json(result);
    } catch (err: any) {
      response.status(500).json({
        error: err.message,
      });
    }
  }
}
