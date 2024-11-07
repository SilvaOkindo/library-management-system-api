import express from "express";
import {
  verifyAdmins,
  verifyAuthorization,
} from "../middleware/auth-middleware.js";
import {
  addCategory,
  deleteCategory,
  getAllCategories,
  updateCategory,
} from "../controllers/admin/category-controller.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", verifyAuthorization, getAllCategories);
categoryRouter.post("/", verifyAdmins, addCategory);
categoryRouter.put("/", verifyAdmins, updateCategory);
categoryRouter.delete("/", verifyAdmins, deleteCategory);
