const express = require('express')
const cartRouter = express.Router()
const User = require('../models/user')

cartRouter.put('/add/:sku', (req, res, next) => {
  User.findOneAndUpdate(
    {_id: req.user._id}, 
    {$push: {"cart": req.params.sku}}, 
    {new: true}, (err, user) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(user)
    })
})

module.exports = cartRouter

