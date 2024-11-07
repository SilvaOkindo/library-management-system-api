import { matchedData, validationResult } from "express-validator"
import { Category } from "../../models/category.js"

/ *admin: can add, read, update, delete category */

export const getAllCategories = async (req, res) => {
    const categories = await Category.find({})
    res.status(200).json({
        success: true,
        data: categories
    })
}

export const addCategory = async (req, res) => {
    try {

        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }

        const data = matchedData(req)

        const newCategory = new Category(data)

        await newCategory.save()

        return res.status(200).json({
            success: true,
            data: newCategory
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const updateCategory = async (req, res) => {
    const {id} = req.params

    try {

        const category = await Category.findByIdAndUpdate(
            {_id: id},
            req.body,
            {new: true}
        )

        if(!category) {
            return res.status(400).json({
                success: false,
                message: "Category not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: category
        })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const deleteCategory = async (req, res) => {
    const {id} = req.params
    try {

        const category = await Category.findByIdAndDelete(id)

        if(!category) {
            return res.status(400).json({
                success: false,
                message: "Category not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: category
        })

        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}