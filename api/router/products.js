import { Router } from "express";
import { productsController } from "../controller/products.js";

const appProducts = Router()

appProducts.get("/", productsController.getAll)

export default appProducts;