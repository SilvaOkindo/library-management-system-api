import mongoose from "mongoose"

const authorSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    bio: {
        type: String,
        required: false
    },
    nationality: {
        type: String,
        required: false
    },
    booksPublished: {
        type: Number,
        default: 0
    }
});
