import { customerModel } from "../model/customer.js";
import { validationResult } from "express-validator";

export class customerController{
    static async getAll(req,res){
        if (req.query.id) {
            const product = await customerModel.getId(req.query.id)
            if (product.status != 200) return res.status(product.status).send(product) 
            return res.status(product.status).send(product) 
        }
        const data = await customerModel.getAll()
        if (data.status != 200) return res.status(data.status).send(data) 
        return res.status(data.status).send(data) 
    }

    static async postCustomer(req,res){
        //validar si hay errores
        const errors = validationResult(req)
        if(!errors.isEmpty()) return res.status(400).send({status:400, message:errors.errors[0].msg})
        //validar si el usuario que queremos agregar ya existe

        const arrayOrder = req.body.order;
        delete req.body.order
        const verifyCustomer = await customerModel.verifyCustomer(req.body.cc)
        if(verifyCustomer.status != 200) return res.status(verifyCustomer.status).send(verifyCustomer)
        let newIdCustomer;
        if (verifyCustomer.message.length == 0) {
            const keysCustomer = Object.keys(req.body);
            const valuesCustomer = Object.values(req.body)
            const addCustomer = await customerModel.postCustomer(keysCustomer, valuesCustomer)
            if(addCustomer.status != 200) return res.status(addCustomer.status).send(addCustomer)
            const infoCustomer = await customerModel.verifyCustomer(req.body.cc)
            newIdCustomer = infoCustomer.message[0].id
        }else{
            newIdCustomer = verifyCustomer.message[0].id
        }

        arrayOrder.forEach(async(element) => {
            const dataPush = {
                idCustomer: newIdCustomer,
                idProduct: element.idProduct,
                cant: element.cant,
                total_price: element.total_price
            }
            const keys = Object.keys(dataPush);
            const values = Object.values(dataPush)
            const addOrder = await customerModel.postOrder(keys,values)
        });

        
        res.status(200).send({status:200, message:"Agregado con exito"})
    }
}

/* {
    whatsapp ,
    depta ,
    city,
    address,
    postal_code ,
    description ,
    full_name,
    cc,
    order:[
        {
            idProduct,
            cant,
            total_price
        }
    ],
    total_price_order
} */