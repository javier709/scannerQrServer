import { request, response } from 'express'

const jwt = require('jsonwebtoken')

// * Agrego JWT al header como validación

const validateJWT = (req = request, res = response, next) => {
    const token = req.headers.authorization     // * Token from header
    console.log(token);
    if(!token) {
        console.log('Access denied');
        return res.status(401).json({
            ok:false,
            msg: 'Missing token'
        })
    }

    try {

        // * Verifico el token obtenido con la secretKey

        const {id} = jwt.verify(token,process.env.JWT_SECRET)
        req.id = id
        console.log('Access granted');
        next()
    } catch (e) {
        return res.status(401).json({
            ok: false,
            msg: 'Invalid token'
        })
    }
}

export const jwtValidator = { validateJWT }