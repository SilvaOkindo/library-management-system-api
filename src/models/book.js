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
    }
})