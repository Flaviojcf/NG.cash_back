import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();

    try {
      const result = await authenticateUserUseCase.execute({
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
