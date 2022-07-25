const express = require('express')
const app = express()
const IP = require('./IPs')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ipdatabase')
const conn = mongoose.connection;

conn.once('open',()=>{
    console.log("Database connected")
})

app.get('/',(req,res)=>{
    console.log("Request receive at / ")
    IP.find().then(data=> res.send(data))
})

app.listen(2000, ()=>{
    console.log("server is running on Port 2000")
})