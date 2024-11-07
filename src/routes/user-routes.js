import express from 'express'
import { deleteUser, getUserById } from '../controllers/user-controller.js'
import { verifyAuthorization } from '../middleware/auth-middleware.js'

export const userRouter = express.Router()

userRouter.get("/", verifyAuthorization, getUserById)
userRouter.delete("/", verifyAuthorization, deleteUser)