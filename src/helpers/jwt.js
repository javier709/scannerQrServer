const jwt = require('jsonwebtoken')

// * Genero el token

const generateJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid }

        jwt.sign(payload, process.env.JWT_SECRET, (err,token) => {
            if (err){
                console.log(err);
                reject
            } else {
                resolve(token)
            }
        })
    })
}

export default generateJWT