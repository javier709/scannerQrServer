// * Archivo de configuración de la aplicación
import express from 'express'
import morgan from 'morgan'
import session from 'express-session'

var cors = require('cors')

// * Rutas

import authRoutes from './routes/auth.routes.js'
import usersRoutes from './routes/users.routes.js'

// * Express

const app = express()

// * cors

app.use(cors())

// * Settings

app.set('port', 3000)
app.use(express.urlencoded({extended: false}))
app.use(express.json())

// * Middlewares

app.use(morgan('dev'))

// * Express session

app.use(session({
  secret: 'secret', // * Secret seed for jwToken
  resave: true, 
  saveUninitialized: true
}))

// * Dirección de rutas

app.use(
  usersRoutes,
  authRoutes
)

export default app
