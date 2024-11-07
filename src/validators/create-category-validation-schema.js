export const createCategorySchema = {
    name: {
        notEmpty: {
            errorMessage: "Category name cannot be empty"
        },
        isString: {
            errorMessage: "Category name must a string"
        }
    },

    description: {
        notEmpty: {
            errorMessage: "Category description cannot be empty"
        },
        isString: {
            errorMessage: "Category description must a string"
        }
    },

}