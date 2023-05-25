const jwt = require('jsonwebtoken');

// * Genero el token

const generateJWT = (uid) => {
    return new Promise((resolved, reject) => {
        const payload = { uid };

        jwt.sign(payload, process.env.JWT_SECRET,{
            expiresIn: '8h'                             // * El token expira en 8 horas
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject('No se pudo generar el JWT');
            } else {
                console.log('llegó a este lugar');
                resolved(token);
            }
        });
    });
}

module.exports = {generateJWT}