const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const dbURI = process.env.MONGO_URI
const ejs = require('ejs')
const path = require("path")
const port = process.env.PORT || 5000 ||8000 

//Initializing express app
const app = express()

//MongoDB connection
const conn = mongoose.connect(dbURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('MongoDB connection successful')
}).catch((err)=>{
    console.log(err)
})

//middleware setup
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.set('view engine', 'ejs')
app.use(express.static(path.join(__dirname,'public')))
app.set("views",path.join(__dirname,"views"))


//server running on port
app.listen(port, console.log('server running on port ' + port))





