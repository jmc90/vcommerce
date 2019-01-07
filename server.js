const express = require('express')
const app = express()
require("dotenv").config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require("express-jwt")
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) 
app.use(morgan('dev')) 
app.use('/api', expressJwt({secret: process.env.SECRET}))

//Routes
app.use('/auth', require('./routes/auth'))
app.use('/products', require('./routes/products'))
// app.use('/api/cart', require('./routes/cart'))

// Mongoose Connect
mongoose.connect('mongodb://localhost:27017/vcommerce', {useNewUrlParser: true}, () => {
    console.log('You are connected to the Database.')
})

// Global server error handler
app.use((err, req, res, next) => {  
    console.log(err)
    if(err.name === "UnauthorizedError"){
        res.status(err.status)
    }
    return res.send({errMsg: err.message}) 
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`)
})