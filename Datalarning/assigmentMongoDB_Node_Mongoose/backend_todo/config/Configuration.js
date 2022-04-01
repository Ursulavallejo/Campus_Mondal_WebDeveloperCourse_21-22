import mongoose from "mongoose"
import dotenv from 'dotenv'

dotenv.config()

const connectToDatabase = async (uri, callback) => {
    try {
        const DB_URL = process.env.MONGODB_URL
        await mongoose.connect(DB_URL)
        console.log('SUCCESSFULLY CONNECTED TO THE DATA BASE!!')
    } catch (error) {
        console.log('ERROR WHILE TRYING TO CONNECT TO THE DATABASE', error)
        process.exit()
    }
}

const connectToPort = (app) => {
const port = process.env.PORT
app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}`)
})
}

export default {
    connectToDatabase,
    connectToPort
}