import {User} from '../models/user.js'

// get user details: get user by id
export const getUserById = async (req, res) => {
    const userId = req.user.id

    try {
        const user = await User.findById(userId).select('-password')

        if(!user) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }


        return res.status(200).json({
            success: true,
            data: user
        })
        
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}


// logged user can delete his/her account
export const deleteUser = async (req, res) => {
    const userId = req.user.id

    try {
        const deletedUser = await User.findByIdAndDelete(userId)
        if(!deletedUser) {
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        return res.status(200).json({
            success: true,
            data: deletedUser
        })
        
      

    } catch(error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

