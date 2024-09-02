// setup server
const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const polyFill = require("babel-polyfill")

const noteRoutes = require('./routes/noteRoutes')

const port = 3000;
const app = express()
app.use(express.json()); 

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use('/api/v1' , noteRoutes)

app.get('/', (req , res)=>{
    res.send("Express Hello World 11")
})

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})