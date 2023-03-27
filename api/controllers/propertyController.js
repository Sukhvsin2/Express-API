import {propertySchema} from "../../models/Posts"

export const propertyController = async (req, res) => {
    try {
        const properties = await propertySchema.find()
        res.status(200).json(properties)
    } catch (error) {
        res.status(500).json({
            message: error
        })
    }
}