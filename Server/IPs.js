const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/ipdatabase')

const ipSchema = new mongoose.Schema({
    ip_address: String,
    name: String,
    subnet: String,
    comment: String
})

const IP = mongoose.model('IP',ipSchema, 'ipdata')

module.exports = IP