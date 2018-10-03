const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModule('user')

Router.get('/list', function (req, res) {
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})
Router.post('/register', function (req, res) {
    console.log('body', req.body)
    const { user, pwd, type } = req.body
    User.findOne({ user }, function (err, doc) {
        if (err) {
            return res.json({ code: 1, msg: '用户名重复' })
        }
        User.create({ user, pwd, type }, function (e, doc) {
            if (e) {
                return res.json({ code: 1, msg: '后端出错了' })
            }
            return res.json({ code: 0 })
        })
    })
})
Router.get('/info', function (req, res) {
    return res.json({ code: 1 })
})

module.exports = Router
