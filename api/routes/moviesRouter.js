import express from "express"
const Router = express.Router;
import {getMovies} from "../controllers/getMovies.js";

export const moviesRouter = Router()
moviesRouter.get('/', getMovies)
