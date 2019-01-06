//fix get all

const express = require('express')
const productRouter = express.Router()
const Product = require('../models/product')
const axios = require('axios') 

//get all
productRouter.get('/', (req, res, next) => {
    Product.find(async (err, products) => {
        if(err) {
            res.status(500)
            return next(err) 
        }
// similar joining crypto symbol (bbuy sku) from backend to live api
        // const cryptoPrices = Array.from(new Set(investments.map(investment => investment.symbol))).join(',')     
        // const cryptoPriceGet = await axios.get(`https://min-api.cryptocompare.com/data/pricemulti?fsyms=${cryptoPrices}&tsyms=USD&api_key=85902babd490353363f521ff093d32bdc35fed2f3d9c30d77158e7bb3eff335e`)
        // return res.status(200).send({investments, cryptoPriceGet: cryptoPriceGet.data})

        const SKUs = Array.from(new Set(products.map(product => product.symbol))).join(',')
        const allProducts = await axios.get(`https://api.bestbuy.com/v1/products((search=gpu))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=bestSellingRank.asc&pageSize=20&format=json`)
        return res.status(200).send(products, allProducts)
        
    })
})

//get one
productRouter.get('/:id', (req, res, next) => {
    Product.findOne({_id: req.params.id}, (err, product) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(product)
    })
})

//post one
productRouter.post('/', (req, res, next) => {
    const newProduct = new Product(req.body)
    newProduct.save((err, product) => {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(product)
    })
})

//update one
productRouter.put('/:id', (req, res, next) => {
    Product.findOneAndUpdate(
    {_id: req.params.id},
    req.body,
    {new: true},
    (err, updatedProduct) => {
        if(err) {
            return next(err)
        }
        return res.status(201).send(updatedProduct)
    })
})

//delete one
productRouter.delete('/:id', (req, res, next) => {
    Product.findOneAndDelete({_id: req.params.id}, (err, deletedProduct) => 
    {
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(202).send(`${deletedProduct.name} was successfully deleted.`)
    })
})

module.exports = productRouter