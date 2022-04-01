import dotenv from 'dotenv'
import StatusCode from "../../config/StatusCode.js"
import cors from 'cors'
import express from "express"
import helmet from "helmet"
import morgan from 'morgan'

dotenv.config()
//Config stuff
const allowedRequestOrigins = '*'
const allowedRequestMethods = ['GET', 'POST', 'PUT', 'DELETE']

const cors_options = {
    origin: allowedRequestOrigins,
    methods: allowedRequestMethods
}

// Create Middlewares

const someBananMiddlewareFunction = (req, res, next) => {
    console.log('Middleware function is running and printing "Banana" to console')
    next()
}


const apply = (app) => {
    app.use(helmet())
    app.use(cors(cors_options))
    app.use(express.json())
    app.use(someBananMiddlewareFunction)
    app.use(morgan('common'))
}

const notFound = (req, res, next) => {
    const error = new Error(`Sorry !! Not found "${req.originalUrl}"!`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}


const errorHandler = (error, req, res, next) => {
    const statusCode = res.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stacktrace: process.env.NODE_ENV === 'PRODUCTION' ? 'lol' : error.stack,
    })
    next()
}

const errorHandling = (app) => {
    app.use(errorHandler)
}

export default {
    apply,
    notFound,
    errorHandling
}
