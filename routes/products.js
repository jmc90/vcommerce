const express = require('express')
const productRouter = express.Router()
const axios = require('axios')



productRouter.get('/', async (req, res, next) => {
  try {
  const response = await axios.get(
    `https://api.bestbuy.com/v1/products((search=gpu))?apiKey=nsAkGCaJrNdxZwqGredJIoLI&sort=description.asc&show=description,image,longDescription,name,regularPrice,salePrice,shortDescription,sku&pageSize=20&format=json`
  )
  return res.status(200).send(response.data)
  }

  catch(err) {
    res.status(500)
    return next(err)
  } 
})


productRouter.get('/:sku', async (req, res, next) => {
  try {
    const response = await axios.get(`https://api.bestbuy.com/v1/products(sku=${req.params.sku})?apiKey=nsAkGCaJrNdxZwqGredJIoLI&format=json`)
    return res.status(200).send(response.data)
   }

   catch(err) {
     res.status(500)
     return next(err)
   }
})



module.exports = productRouter