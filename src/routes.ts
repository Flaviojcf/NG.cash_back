import { Router } from "express";
import { ensureAuthenticateUser } from "./middlewares/ensureAuthenticateUser";
import { AuthenticateUserController } from "./modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateTransactionsController } from "./modules/account/useCases/createTransactions/CreateTransactionsController";
import { CreateUserController } from "./modules/account/useCases/createUserAccount/CreateUserController";
import { GetUserBalanceController } from "./modules/account/useCases/getUserBalance/GetUserBalanceController";
import { GetUserTransactionsController } from "./modules/account/useCases/getUserTransactions/GetUserTransactionsController";

export const routes = Router();

const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();

const createTransactionsController = new CreateTransactionsController();

const getUserTransactionsController = new GetUserTransactionsController()

const getUserBalanceController = new GetUserBalanceController()

routes.post("/createUserAccount", createUserController.handle);
routes.post("/authenticateUser", authenticateUserController.handle);

routes.post(
  "/createTransaction",
  ensureAuthenticateUser,
  createTransactionsController.handle
);

routes.get("/getUserTransactions", ensureAuthenticateUser, getUserTransactionsController.handle)

routes.get("/getUserBalance", ensureAuthenticateUser, getUserBalanceController.handle)
