import express from "express";
import {propertyController} from "../controllers/propertyController.js"
const Router = express.Router;

export const propertyRouter = Router()
propertyRouter.get('/', propertyController)
