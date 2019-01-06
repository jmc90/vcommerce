const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    // sku or productID
    sku: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Product', productSchema )