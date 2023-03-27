import mongoose from "mongoose";

export const propertySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    },
    tax: {
        type: String,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    buildingAge: {
        type: Number,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    parking:{
        type: String,
        required: true
    },
    basement: {
        type: String,
        required: true
    },
    mls: {
        type: Number,
        required: true,
    },
    possesion: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Property', propertySchema)