const express = require('express')
const wishListRouter = express.Router()
const User = require('../models/user')

wishListRouter.put('/add/:sku', (req, res, next) => {
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

wishListRouter.put('/remove/:sku', (req, res, next) => {
  User.findOneAndUpdate(
    {_id: req.user._id}, 
    {$pull: {"cart": req.params.sku}}, 
    {new: true}, (err, user) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(user)
    })
})


module.exports = wishListRouter