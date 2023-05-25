import { Router } from 'express'

import { methods as usersController } from '../controllers/users.controller.js'
import { check } from 'express-validator' //*Fields checker
import { validator } from '../middlewares/fields.validator' //* Fields validator
//! TESTING
import { jwtValidator } from '../middlewares/json.web.token.validator'

const router = Router()

// * Defino las rutas de la API

// * Ruta para crear un nuevo usuario

router.post("/api/users" /*[

    // * Valido el formulario, verificando los siguientes campos:
    
    check('name', 'El nombre de usuario es requerido').not().isEmpty(),
    check('pass', 'La contraseña es requerida').not().isEmpty(),
    check('email', 'Email no valido').isEmail(),
    validator.fieldValidator
]*/,usersController.registerUser)

// * Borro el usuario

router.delete("/api/users/:id", usersController.deleteUser)

// * Obtengo usuario por su ID

//router.get("/api/users/:id", usersController.getUser)


// * Obtengo todos los usuarios

router.get('/api/users/', usersController.getAll);


export default router;