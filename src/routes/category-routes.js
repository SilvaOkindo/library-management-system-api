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
import { checkSchema } from "express-validator";
import { createCategoryValidationSchema } from "../validators/create-category-validation-schema.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", verifyAuthorization, getAllCategories);
categoryRouter.post("/", verifyAdmins, checkSchema(createCategoryValidationSchema), addCategory);
categoryRouter.put("/:id", verifyAdmins, updateCategory);
categoryRouter.delete("/:id", verifyAdmins, deleteCategory);
