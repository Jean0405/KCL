import { productsModel } from "../model/products.js";

export class productsController{
    static async getAll(req,res){
        if (req.query.id) {
            const product = await productsModel.getId(req.query.id)
            if (product.status != 200) return res.status(product.status).send(product) 
            return res.status(product.status).send(product) 
        }
        const data = await productsModel.getAll()
        if (data.status != 200) return res.status(data.status).send(data) 
        return res.status(data.status).send(data) 
    }
}