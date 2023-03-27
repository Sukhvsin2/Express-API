import {moviesRouter} from "./api/routes/moviesRouter.js"
import express from  "express"
import bodyParser from "body-parser";
const app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res)=>{
    res.json({message: "This is Home Get Response"})
})

app.use("/movies", moviesRouter);

let PORT = 3000
app.listen(PORT, function() {
    console.log(`Server is Running on http://localhost:${PORT}`);
})