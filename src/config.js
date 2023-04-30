import { config } from 'dotenv'

config()

// * Conexión al servidor

export default {
    host: process.env.host,
    port: process.env.port,
    database: process.env.database,
    user: 'root',
    password: process.env.password
    
}