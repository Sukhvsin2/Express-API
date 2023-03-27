const express = require("express")
const app = express()

let PORT = 3000

app.listen(PORT, function() {
    console.log(`Server is Running on http://localhost:${PORT}`);
})