import { Router } from "express";
import { CreateUserController } from "./modules/account/useCases/createUserAccount/CreateUserController";

export const routes = Router();

const createUserController = new CreateUserController();

routes.post("/createUserAccount", createUserController.handle);
