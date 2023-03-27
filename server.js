import {moviesRouter} from "./api/routes/moviesRouter.js"
import {propertyRouter} from "./api/routes/propertyRouter.js";
import express from  "express"
import bodyParser from "body-parser";
import mongodb from "mongodb"
import dotenv from "dotenv"
dotenv.config();

const uri = process.env.URL;

const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.json({message: "This is Home Get Response"})
})

app.use("/movies", moviesRouter);
app.use("/property", propertyRouter);

let PORT = 3000
app.listen(PORT, function() {
    console.log(`Server is Running on http://localhost:${PORT}`);
})