const express = require('express')
const authRouter = express.Router()
const User = require('../models/user')
const jwt = require('jsonwebtoken')

authRouter.post('/register', (req, res, next) => {
    User.findOne({email: req.body.email.toLowerCase()}, (err, user) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        if(user){
            res.status(500)
            return next(new Error("That email address already is registered to an account"))
        }
        const newUser = new User(req.body)
        newUser.save((err, user) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
            return res.status(201).send({ user: user.withoutPassword(), token })
        })
    })
})

authRouter.post("/logIn", (req, res, next) => {
    User.findOne({ email: req.body.email.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            res.status(403)
            return next(new Error("Email or password are incorrect"))
        }
        user.checkPassword(req.body.password, (err, match) => {
            if (err) return res.status(500).send(err);
            if (!match) {
                res.status(401)
                return next(new Error("Email or password are incorrect"))
            }
            const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
            return res.send({ token: token, user: user.withoutPassword(), success: true })
        });  
    });
})


module.exports = authRouter