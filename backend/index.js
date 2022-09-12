import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors'
import routes from './routes.js'
import 'dotenv/config'

// connect to mongodb atlas or localhost (used in github actions for testing)
const uri = process.env.ENV == "PROD" ? process.env.DB_CLOUD_URI : "mongodb://localhost:27017/";

mongoose.connect(uri)
    .then((x) => {
        console.log(`Connected to MongoDB! Database name: "${x.connections[0].name}"`)
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB', err.reason)
    })

const app = express()

// https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c
app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({ extended: true })); //Parse URL-encoded bodies

app.use(cors())

app.use('/', routes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

export default app