import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/useCases/authenticateUser/AuthenticateUserController";
import { CreateUserController } from "./modules/account/useCases/createUserAccount/CreateUserController";

export const routes = Router();

const createUserController = new CreateUserController();

const authenticateUserController = new AuthenticateUserController();

routes.post("/createUserAccount", createUserController.handle);
routes.post("/authenticateUser", authenticateUserController.handle);
