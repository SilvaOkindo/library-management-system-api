export const loginUserValidationSchema = {
    email: {
        notEmpty: {
            errorMessage: "Email cannot be empty"
        },
        isEmail: {
            errorMessage: "Email must be a valid email"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "Password cannot be empty"
        }
    }
}