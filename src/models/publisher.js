import mongoose from "mongoose"


const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
})


export const Publisher = mongoose.model("Publisher", publisherSchema)