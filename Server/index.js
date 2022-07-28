const express = require('express')
const app = express()
const IP = require('./IPs')
const cors = require('cors')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ipdatabase')
const conn = mongoose.connection;

app.use(cors())
app.use(express.json())

conn.once('open',()=>{
    console.log("Database connected")
})

app.get('/',(req,res)=>{
    console.log("Request receive at / ")
    IP.find().then(data=> res.send(data))
})

app.post('/new', (req,res)=>{
    console.log("Receiving data")
    console.log("Body is",req.body)
    res.send(req.body)
    const entry = new IP({
        ip_address: req.body.ipAddress,
        name: req.body.ipName,
        subnet: req.body.ipSubnet
    })
    entry.save(e => console.log(e))
})

app.listen(2000, ()=>{
    console.log("server is running on Port 2000")
})