import { User } from "../../models/user.js"
import { allowedRoles } from "../../utils/allowed-roles.js"

export const getAllUsers = async (req, res) => {
    const users = await User.find().select("-password")

    res.status(200).json({
        success: true,
        data: users
    })
}

// get all users by role
export const getAllUsersByRole = async (req, res) => {
    const {role} = req.params

    try {

        if(!allowedRoles.includes(role)) {
            return res.status(400).json({
                success: false,
                message: "Invalid role"
            })
        }

        const users = await User.find({role: role})

        return res.status(200).json({
            success: true,
            data: users
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// admin can delete any user
export const deleteUser = async (req, res) => {
    const {id} = req.params

    try {

        const deleteUser = await User.findByIdAndDelete(id)

        if(!deleteUser) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully"
        })
        
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

// approve user to become an admin/manager
export const changeUserRole = async (req, res) => {
    const {role} = req.body
    const {id} = req.params

    try{

        if(!allowedRoles.includes(role)) {
            return res.status(400).json({
                success: false,
                message: "Invalid role"
            })
        }

        const updatedUser = await User.findByIdAndUpdate(
            {_id: id},
            {role: role},
            {new: true}
        )

        
        if(!updatedUser) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: updatedUser
        })
        

    }catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

