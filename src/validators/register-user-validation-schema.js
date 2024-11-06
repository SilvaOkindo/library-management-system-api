export const registerUserValidationSchema = {
    firstName: {
        notEmpty:{
            errorMessage: "First name cannot be empty"
        },
        isString: {
            errorMessage: "First name must be a string"
        }
    },
    lastName: {
        notEmpty:{
            errorMessage: "Last name cannot be empty"
        },
        isString: {
            errorMessage: "Last name must be a string"
        }
    },
    email: {
        notEmpty: {
            errorMessage: "Email cannot be empty"
        },
        isEmail: {
            errorMessage: "Email must be valid"
        }
    },
    password: {
        notEmpty: {
            errorMessage: "Password cannot be empty"
        },
        isString: {
            errorMessage: "Password must be a string"
        },
        isLength: {
            options: {
                min: 4
            },
            errorMessage: "Password must be at least 4 characters"
        }
    },
    confirmPassword: {
        notEmpty: {
            errorMessage: "Password confirmation cannot be empty.",
          },
          isString: {
            errorMessage: "Password confirmation must be a string",
          },
          custom: {
            options: (value, { req }) => {
              if (value !== req.body.password) {
                throw new Error("Passwords do not match.");
              }
              return true;
            },
          },
    }

    

}