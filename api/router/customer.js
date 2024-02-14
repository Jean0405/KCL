import { Router } from "express";
import { customerController } from "../controller/customer.js";

const appCustomer = Router()

appCustomer.get("/", customerController.getAll)

export default appCustomer;