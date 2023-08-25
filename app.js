const {connectDB}= require('./db/connect')
const express = require("express")
const app= express()
const port=3000
const tasks= require("./routes/tasks")
require('dotenv').config()
const notFound=require('./middleware/notFound')
const errorHandler= require('./middleware/error-handler')
// const asyncWrapper= require('./middleware/async')

//middleware
//to parse json in the req body use this middleware
app.use(express.static('./public'))
app.use(express.json())
//routes
// app.get('/hello', (req,res)=>{
//     res.send("TaskManager app")
// })
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandler)

const url=process.env.MONGO_URI

const start= async()=>{
    try {
        await  connectDB(url)
        app.listen(port,console.log(`server is listening on port ${port}...`))
        
    } catch (err) {
        console.log(err)   
    }
}

start().then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log(err)
})
