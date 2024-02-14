import express from "express";
import { fileURLToPath } from 'url';
import path from "path"
import fs from "fs"
import xl from "excel4node"
import appCustomer from "./router/customer.js";
import appProducts from "./router/products.js";
import cors from "cors";
import { envairoment } from "./config/envairoment.js";

const appExpress = express();
appExpress.use(express.json())
appExpress.use(cors())

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let usuarios = [
    {
        nombre: "daniel",
        apellido: "perez",
        edad: 27,
        id: 45345645,
        telefono: 344564576,
        correo: "daniel@gmail.com",
    },
    {
        nombre: "Pedro",
        apellido: "suarez",
        edad: 25,
        id: 45345645111,
        telefono: 3445645722226,
        correo: "petro@gmail.com",
    }
]

appExpress.use("/customer", appCustomer)
appExpress.use("/products", appProducts)

appExpress.get("/excel", (req,res)=>{
    let date = new Date();
    let fechaDia    = date.getUTCDate();
    let fechaMes    = (date.getUTCMonth()) + 1; 
    let fechaAño    = date.getUTCFullYear();

    var wb = new xl.Workbook();
    let nombreArchivo = "clientes_" + fechaDia + "_" + fechaMes + "_" + fechaAño + ".";
    var ws = wb.addWorksheet(nombreArchivo);

    // Crear estilos
    const cualColumnaEstilo = wb.createStyle({
        fill: { type: "pattern", patternType: "solid", fgColor: "#9CFF90" }, // Fondo verde
        alignment: { horizontal: "center" }, // Texto centrado
        font: {
            name: 'Arial',
            color: '#000000',
            size: 12,
            bold: true,
        }
    });
    const contenidoEstilo = wb.createStyle({
        font: {
            name: 'Arial',
            color: '#494949',
            size: 11,
        },
        alignment: { horizontal: "center" },
    });


    //Nombres de las columnas
    ws.cell(1, 1).string("Nombre").style(cualColumnaEstilo);
    ws.cell(1, 2).string("Apellido").style(cualColumnaEstilo);
    ws.cell(1, 3).string("Edad").style(cualColumnaEstilo);
    ws.cell(1, 4).string("ID").style(cualColumnaEstilo);
    ws.cell(1, 5).string("Teléfono").style(cualColumnaEstilo);
    ws.cell(1, 6).string("Correo").style(cualColumnaEstilo);


    let cualFila = 2;
    // Foreach - creación de datos
    usuarios.forEach(usuarioActual => {
        ws.cell(cualFila, 1).string(usuarioActual.nombre).style(contenidoEstilo);
        ws.cell(cualFila, 2).string(usuarioActual.apellido).style(contenidoEstilo);
        ws.cell(cualFila, 3).number(usuarioActual.edad).style(contenidoEstilo);
        ws.cell(cualFila, 4).number(usuarioActual.id).style(contenidoEstilo);
        ws.cell(cualFila, 5).number(usuarioActual.telefono).style(contenidoEstilo);
        ws.cell(cualFila, 6).string(usuarioActual.correo).style(contenidoEstilo);

        cualFila +=1;
    });


    //Ruta del archivo
    const pathExcel = path.join(__dirname, 'excel', nombreArchivo + '.xlsx');
    //Escribir o guardar
    wb.write(pathExcel, function(err, stats){
        if(err) console.log(err);
        else{
            // Crear función y descargar archivo
            function downloadFile(){res.download(pathExcel);}
            downloadFile();

            // Borrar archivo
            fs.rm(pathExcel, function(err){
                if(err) console.log(err);
                else  console.log("Archivo descargado y borrado del servidor correctamente");
            });
        }
    });

} )

const my_server = envairoment.my_server
appExpress.listen(my_server,()=>console.log(`Servidor inicializado http://${my_server.host}:${my_server.port}`))