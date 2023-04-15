const express = require('express');
const app = express();
app.use(express.json())
require("dotenv").config();
const cors = require('cors')
app.use(cors())

// making routes live -----
app.use('/github', require("./routes/github"))

//listen -------
const server = app.listen(process.env.PORT, () => {
    console.log(`server is active on ${process.env.PORT}`)
})



