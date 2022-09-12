import mongoose from "mongoose";
import { nanoid } from "nanoid";

const urlSchema = new mongoose.Schema({
    originalUrl: {type: String, required: true},
    shortenedUrl: {type: String, required: true, default: () => nanoid(7)}
})

export default mongoose.model('Url', urlSchema)