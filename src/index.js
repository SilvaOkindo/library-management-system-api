import express from 'express'
import dotenv from 'dotenv'
import { DBConnection } from './config/db-connection.js'
import { authRouter } from './routes/auth-routes.js'

dotenv.config()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({message: "Welcome to lms api"})
})

// db connections
DBConnection()

// routes
app.use("/api/v1/auth", authRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`api running on port ${PORT}`)
})