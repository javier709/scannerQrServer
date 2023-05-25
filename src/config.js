import { config } from 'dotenv';

config()

// * Conexión al servidor
export default {
    host:process.env.HOST,
    port:process.env.PORT,
    database:process.env.DATABASE,
    user:'root',
    password:process.env.PASSWORD,    
};