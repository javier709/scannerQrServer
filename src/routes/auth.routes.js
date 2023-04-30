import { Router } from "express";
import { methods } from "../controllers/auth.controller.js";

// * En las rutas hacemos referencia al controlador, y en el controlador se van a almacenar todos los
// *mecanismos que van a trabajar para la vista como para el modelo.
// * Create the router (CRUD request from express), las rutas acceden a las vistas

const router = Router()

// * Esta ruta es para la autenticación de usuarios, contiene endpoint para el login del usuario
// * Cuando el usuario vaya a la ruta login se ejecuta la función del controller

router.post('api/auth/login', methods.login)   // * accedo a auth controller, y a su función/método login, posteo un nuevo usuario


// * Exporto el router, se importa en app.js
export default router