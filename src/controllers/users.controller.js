import { request, response } from 'express'
import { connect } from '../database/database'
import bcrypt from 'bcrypt'

// * Registro al usuario

const registerUser = async(req=request, res = response) => {
    /*

    const{ email, pass} = req.body;
    try {
        const existEmail = await user.findOne({email})

        if (existEmail) {
            return res.status(400).json({
                ok:false,
                msg: 'El correo ya está registrado'
            })
        }
        const user = new user(req.body);

        // * Encripto la contraseña

        const salt = bcrypt.genSaltSync();
        user.pass = bcrypt.hashSync(pass, salt);

        // * Guardar usuario

        await user.save();

        // * Generar el Token - JWT

        const uid = user.id;
        const token = await generateJWT(user._id);

        res.json({
            ok:true,
            uid,
            token
        });
    }   catch (error) {
        console.error(error);
        res.status(500).json({
            ok:false,
            msg: 'Error inesperado, revise logs'
        })
    }
}*/

 // * Encripto la contraseña

 let passwordHash = await bcrypt.hash(req.body.pass,8)

    // * Creo el objeto
    const object = {
        name:req.body.name,
        last_name:req.body.last_name,
        dni:req.body.dni,
        dir:req.body.dir,
        birthdate:req.body.birthdate,
        email:req.body.email,
        user_name:req.body.user_name,
        pass:passwordHash,
        role:req.body.role
    }

    try {
 
        const connection = await connect           // * Instancio la conexion
  
        const result = await connection.query('INSERT INTO users SET ?', object)         // * Inserto el objeto
        res.status(201).json({
            ok: true,
            object,
            result,
            message: 'Everithing OK, user created!'
        })
    }  catch (err) {
            res.status(400).json({
                ok:false,
                err,
                message: 'Something goes wrong!'
            })
        }
}

// * Obtengo todos los usuarios

const getAll = async (req = request, res = response) => {
    try {
        const connection = await connect
        const result = await connection.query(
            `SELECT * FROM users`
            )
        res.status(200).json({
            ok: true,
            result,
            msg: 'Approved'
        })
    }
    catch (e) {
        res.status(400).json({
            ok: false,
            err,
            msg: 'Rejected'
        })
    }
}

//Obtenemos un usuario especifico
const getUser = async(req = request, res = response) => {
    const user_id = req.params.id

    try {
        const connection = await connect

        const result = await connection.query('SELECT * FROM users WHERE id = ?', user_id)

        res.status(200).json({
            ok: true,
            result,
            message: 'Todo ok'
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            err,
            message: 'Algo salio mal'
        })
    }
}

//Borramos el usuario
const deleteUser = async(req = request, res = response) => {
    const user_id = req.params.id
    try {
        const connection = await connect

        const result = await connection.query('DELETE FROM users WHERE id = ?', user_id)

        res.status(200).json({
            ok: true,
            result,
            message: 'Todo ok'
        })
    } catch (err) {
        res.status(400).json({
            ok: false,
            err,
            message: 'Algo salio mal'
        })
    }
}



export const methods = {
    getAll, deleteUser, getUser, registerUser
}