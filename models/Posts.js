import mongoose, {Schema} from "mongoose";

const propertySchema = new Schema({
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
        type: String,
        required: true,
    },
    possesion: {
        type: String,
        required: true
    }
});

const model = mongoose.model('Property', propertySchema)
// export const schema = model.schema;
export default model;