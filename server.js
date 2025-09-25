const cors = require("cors");




require('dotenv').config()
const express = require('express')
const app=express()
app.use(cors());
const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db=mongoose.connection
db.on('error',(error) => console.error('error'))
db.once('open',()=> console.log('Connected to database'))
app.use(express.json())
const feedbacksRouter = require('./routes/feedbacks')
app.use('/feedbacks',feedbacksRouter)
app.listen(3000,() => console.log('Server Started'))
