import { myConexion } from "../db/connect.js";

const database = await myConexion();

export class customerModel{
    static async getAll(){
        return new Promise((resolve,reject)=>{
            const query = "SELECT c.*, JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'name', p.name, 'description', p.description, 'price', p.price, 'stars', p.stars, 'promo', p.promo, 'cant', o.cant, 'total_price', o.total_price)) AS info_order, SUM(o.total_price) AS total_price_order FROM `order` o INNER JOIN customer c ON idCustomer = c.id INNER JOIN products p ON idProduct = p.id GROUP BY c.id"
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
            const query = "SELECT c.*, JSON_ARRAYAGG(JSON_OBJECT('id', p.id, 'name', p.name, 'description', p.description, 'price', p.price, 'stars', p.stars, 'promo', p.promo, 'cant', o.cant, 'total_price', o.total_price)) AS info_order, SUM(o.total_price) AS total_price_order FROM `order` o INNER JOIN customer c ON idCustomer = c.id INNER JOIN products p ON idProduct = p.id WHERE c.id = ? GROUP BY c.id"
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

    static async verifyCustomer(cc){
        return new Promise((resolve,reject)=>{
            const query = "SELECT * FROM customer WHERE cc = ?"
            database.query(
                query,
                [cc],
                (err,data)=>{
                    if(err) return resolve({status:400, message:err.message})
                    return resolve({status:200, message: data})
                }
            )
        })
    }


    static async postCustomer(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO customer(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }

    static async postOrder(keys,values){
        return new Promise((resolve, reject)=>{
            const placeholders = keys.map(() => "?").join(", ");
            database.query(
                `INSERT INTO 'order'(${keys.map(key=>key).join(", ")}) VALUES (${placeholders})`,
                [...values],
                (err,data)=>{
                    if(err) return resolve({status:400, message: err.message})
                    return resolve({status:200, message:"Agregado con Exito"})
                }
            )
        })
    }
}