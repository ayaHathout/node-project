import { Schema, model } from "mongoose";
const department_schema = new Schema({
    name: {
        type: String,
        require: true,
    },
    code: {
        type: String,
        require: false,
    }
}, {timestamps: true});