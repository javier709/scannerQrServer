// * Los controladores manipulan la información que viene de las rutas, completando así el modelo MVC
// * Views contiene las vistas, Controllers contiene los controladores y Models contiene los modelos
// * En los controladores se almacenan todos los mecanismos que van a trabajar para la vista como para el modelo.

import {connect} from './../database/database.js'
import { request, response } from 'express'
import generateJWT from './../helpers/jwt.js'
import bcryptjs from 'bcryptjs'


// * Creo la constante (función )asíncrona, va a tener una solicitud y una respuesta, y va a devolver un usuario y contraseña

const login = async(req = request, res = response) => {
    const { username, password} = req.body          // * Obtiene la data del body

    console.log(`username: ${username} password: ${password}`);

    // esperamos la conexión a la base de datos, una vez que se conecta verifica si existe el usuario

    try {
        const connection = await connect
        const result = await connection.query('SELECT * FROM users WHERE username = ?', username)
        console.log(result);

        if (result.length !=0) {    // * Si el usuario existe, entonces: 
            const validPassword = bcryptjs.compareSync(pass,result[0].pass)         // * Compara el password encriptado

            if(!validPassword) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Invalid password'
                })
            } else {
                // * Para la generación de token, usa los roles, luego los compara
                const token = await generateJWT(result[0].id)   // * Genera el token de la sesión
                return res.status(200).json({
                    ok:true,
                    token,
                    result
                })
            }
        } else {
            return res.status(400).json({
                ok:false,
                msg:'El usuario no existe.'
            })
        }
    }  catch (e){
        return res.status(400).json({
            ok:false,
            msg:'Something goes wrong'
        })
    }
}

// * exportamos la constante login con todos sus mecanismos.
export const methods = {login}
