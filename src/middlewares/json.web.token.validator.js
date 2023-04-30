import { request, res, response } from "express";

const jwt = require('jsonwebtoken')


const validateJWT = (req = request, res = response, next) => {
    const token = req.headers.authorization
    console.log(token);
    if(!token) {
        console.log('Access denied');
        return res.status(401).json({
            ok:false,
            msg: 'Missing token'
        })
    }

    try {

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