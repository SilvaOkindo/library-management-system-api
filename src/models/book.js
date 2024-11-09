import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    ISBN: {
        type: String,
        required: true
    },
    isAvailable: {
        type: String,
        default: true
    },
    coverImageUrl: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    publisher: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
})

export const Book = mongoose.model("Book", bookSchema)