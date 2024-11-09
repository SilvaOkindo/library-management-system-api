import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

export const DBConnection = () => {
    mongoose.connect(process.env.DATABASE_URL).then(() => {
        console.log("DB connected...")
    }).catch(err => {
        console.log(err)
    })
}