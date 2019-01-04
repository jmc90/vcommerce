const express = require('express')
const app = express()
const morgan = require('morgan')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 8000

// Middleware
app.use(express.json()) 
app.use(morgan('dev')) 

//Routes
// app.use('/items', require('./routes/item'))

// Mongoose Connect
mongoose.connect('mongodb://localhost:27017/vcommerce', {useNewUrlParser: true}, () => {
    console.log('You are connected to the Database.')
})

// Global server error handler
app.use((err, req, res, next) => {  
    // console.log(err)
    return res.send({errMsg: err.message})
})

// Server
app.listen(PORT, () => {
    console.log(`Server is running on Port ${PORT}.`)
})