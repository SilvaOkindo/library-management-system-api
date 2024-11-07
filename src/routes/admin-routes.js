import express from "express";
import { verifyAdmins } from "../middleware/auth-middleware.js";
import {
  changeUserRole,
  deleteUser,
  getAllUsers,
} from "../controllers/admin/admin-controller.js";

export const adminRouter = express.Router();

adminRouter.get("/users", verifyAdmins, getAllUsers);
adminRouter.delete("/delete-user/:id", verifyAdmins, deleteUser);
adminRouter.patch("/change-role/:id", changeUserRole);
