import { matchedData, validationResult } from "express-validator"
import { hashPassword } from "../helpers/hash-passwords.js"
import { User } from "../models/user.js"
import { comparePassword } from "../helpers/compare-passwords.js"
import jwt from 'jsonwebtoken'

export const registerUser = async(req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }

        //const user = await User.findOne({})

        const data = matchedData(req)
        data.password = hashPassword(data.password)
        
        const newUser = new User(data)
        await newUser.save()

        return res.status(201).json({
            success: true,
            newUser
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const loginUser = async(req, res) => {
    try {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(400).json({
                success: false,
                errors: errors.array()
            })
        }

        const {email, password} = matchedData(req)
        const user = await User.findOne({email})

        if(!user) {
            return res.status(404).json({
                success: false,
                message: "User not found. Register and try again"
            })
        }

        if(!comparePassword(password, user.password)) {
            return res.status(400).json({
                success: false,
                message: "Bad credentials"
            })
        }

        const token = jwt.sign({
            id: user._id,
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName,
            role: user.role
        }, process.env.JWT_SECRET, {expiresIn: "120min"})

        return res.status(200).json({
            success: true,
            token
        })


        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const checkAuth = (req, res) => {
    return req.user ? res.status(200).json({message: "Welcome"}) : res.status(403).json({message: "Not authenticated"})
}
