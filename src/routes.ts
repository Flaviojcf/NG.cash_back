import {Router} from "express"
import { CreateUserAccountController } from "./modules/account/useCases/createUserAccount/CreateUserAccountController";


export const routes = Router();

const createUserAccountController = new CreateUserAccountController()


routes.post("/createUserAccount", createUserAccountController.handle)