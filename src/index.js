import express from 'express'
import dotenv from 'dotenv'
import { DBConnection } from './config/db-connection.js'
import { authRouter } from './routes/auth-routes.js'
import { userRouter } from './routes/user-routes.js'
import { adminRouter } from './routes/admin-routes.js'
import { categoryRouter } from './routes/category-routes.js'

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
app.use("/api/v1/users", userRouter)
app.use("/api/v1/admin", adminRouter)
app.use('/api/v1/admin/categories', categoryRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`api running on port ${PORT}`)
})