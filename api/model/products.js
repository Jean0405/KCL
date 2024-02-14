import { myConexion } from "../db/connect.js";

const database = await myConexion();

export class productsModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM products"
            database.query(
                query,
                (err,data)=>{
                    if(err) return resolve({status:400, message:err.message})
                    return resolve({status:200, message: data})
                }
            )
        })
    }

    static async getId(id){
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM products WHERE id = ?"
            database.query(
                query,
                [id],
                (err,data)=>{
                    if(err) return resolve({status:400, message:err.message})
                    return resolve({status:200, message: data})
                }
            )
        })
    }
}