import express from "express";
import { checkSchema } from "express-validator";
import { registerUserValidationSchema } from "../validators/register-user-validation-schema.js";
import { checkAuth, loginUser, registerUser } from "../controllers/auth-controllers.js";
import { loginUserValidationSchema } from "../validators/login-user-validation-schema.js";
import { verifyToken } from "../middleware/auth-middleware.js";

export const authRouter = express.Router();

authRouter.post(
  "/register",
  checkSchema(registerUserValidationSchema),
  registerUser
);
authRouter.post("/login", checkSchema(loginUserValidationSchema), loginUser);
authRouter.get("/check-auth", verifyToken, checkAuth)
