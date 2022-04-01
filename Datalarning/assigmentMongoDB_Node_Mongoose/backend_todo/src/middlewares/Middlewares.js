import dotenv from 'dotenv'
import StatusCode from "../../config/StatusCode.js"
import express from "express"
import helmet from "helmet"
import morgan from 'morgan'


dotenv.config()

const someBananMiddlewareFunction= (req,res, next) => {
    console.log('Middleware function is running and printing "Banana" to console')
    next()
}

const apply = (app)=>{
    app.use(helmet())
    app.use(express.json())
    app.use(someBananMiddlewareFunction)
    app.use(morgan('common'))

}

const notFound = (req,res, next)=>{
    const error = new Error(`Sorry!! Not found: ${req.originalUrl}`)
    res.status(StatusCode.NOT_FOUND)
    next(error)
}

const wrongPath = (app) => {
    app.use(notFound)
}

const errorHandler = (error, req, res, next) =>{
    const statusCode = res.statusCode === StatusCode.OK ? StatusCode.INTERNAL_SERVER_ERROR : res.statusCode
    res.status(statusCode)
    res.json({
        statusCode: statusCode,
        message: error.message,
        stacktrace: process.env.NODE_ENV === 'PRODUCTION'? 'lols' : error.stack,
    })
}

const errorHandling = (app) => {
    app.use(errorHandler)
}

export default {
    apply,
    wrongPath,
    errorHandling
}
