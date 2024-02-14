import { loadEnv } from "vite";

const env = loadEnv("development", process.cwd(), "VITE");

const envairoment = {
    my_server: JSON.parse(env.VITE_MY_SERVER),
    my_conexion: JSON.parse(env.VITE_MY_CONEXION)
}

export {envairoment}   