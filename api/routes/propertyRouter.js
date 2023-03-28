import express from "express";
import {propertyController, postProperty} from "../controllers/propertyController.js"
const Router = express.Router;

export const propertyRouter = Router()
propertyRouter.get('/', propertyController)
propertyRouter.post('/', postProperty)
