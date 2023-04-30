import mysql from 'promise-mysql'
import config from '../config.js'

// * Conexión a la base de datos

const connection = mysql.createConnection({
    host: config.host,
    port: config.port,
    database: config.database,
    user: config.user,
    password: config.password
})

// * Obtengo la conexión a la base de datos y retornamos

const getConnection = () => {
    console.log('Conexión exitosa')
    return connection
}

export const connect = getConnection()