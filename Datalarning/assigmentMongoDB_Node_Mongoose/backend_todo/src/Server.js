import express from 'express'
import dotenv from 'dotenv'
import helmet from "helmet"
import morgan from 'morgan'

import middlewares from './middlewares/Middlewares.js'
import Configuration from '../config/Configuration.js'
import TaskRoutes from "./routes/Task.routes.js"
import AliveRoute from "./routes/Alive.route.js"

dotenv.config()
const app = express()

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(helmet())
app.use(morgan('common'))

app.get('/recipe', (req, res) => {
    res.send('Pancakes!')
})
AliveRoute.aliveRoute(app)

TaskRoutes.routes(app)
app.use(middlewares.notFound)
app.use(middlewares.errorHandler)

Configuration.connectToDatabase()
Configuration.connectToPort(app)

export default app