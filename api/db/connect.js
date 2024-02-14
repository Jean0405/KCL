import mysql from "mysql2"
import { envairoment } from "../config/envairoment.js"

export async function myConexion(){
    try {
        let conexion = undefined;
        const my_conexion = envairoment.my_conexion
        conexion = mysql.createPool(my_conexion)
        return conexion
    } catch (error) {
        return {status:500, message: "Error en la conexion"}
    }
}