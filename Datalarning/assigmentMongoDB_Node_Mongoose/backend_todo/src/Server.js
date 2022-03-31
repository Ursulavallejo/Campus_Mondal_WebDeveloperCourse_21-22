import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'

import middlewares from './src/middlewares/Middlewares.js'
import Configuration from "./config/Configuration.js"
import UserRoutes from "./src/routes/User.routes.js"

dotenv.config()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())
const port = process.env.PORT

app.use(helmet())
app.use(morgan('common'))

// app.get('/recipe', (req, res) => {
//     res.send('Pancakes!')
// })

UserRoutes.routes(app)
app.use(middlewares.notfound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app