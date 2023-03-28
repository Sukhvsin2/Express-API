import model from "../../models/Posts.js"
import Joi from "joi"

// Joi Validater for Posting Properties
// const validateProperty = Joi.object({
//     address: Joi.string().required(),
//     tax: Joi.string().required(),
//     type: Joi.string().required(),
//     buildingAge: Joi.number().required(),
//     size: Joi.string().required(),
//     parking: Joi.string().required(),
//     basement: Joi.string().required(),
//     mls: Joi.number().required(),
//     possesion: Joi.string().required()
// })

export const propertyController = async (req, res) => {
    try {
        const properties = await model.find()
        res.status(200).json(properties)
    } catch (error) {
        res.status(500).json({
            messageError: error
        })
    }
}

export const postProperty = async (req, res) => {
    try {
        // const {error, value} = validateProperty.validate(req.body, {
        //     abortEarly: false
        // })
        // console.log(value);
        // if(error) throw error;
        const p = await model.create({
            address: "addr3",
            tax: "tax3",
            type:"type3",
            buildingAge: 3,
            size: "size3",
            parking:"park3",
            basement: "base3",
            mls: 1233,
            possesion: "poss3"
        })
        // console.log(value);
        res.status(201).json(p);
    } catch (error) {
        res.json({error: error.details})
    }
}