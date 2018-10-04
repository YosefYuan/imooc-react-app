const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModule('user')

Router.get('/list', function (req, res) {
    // User.deleteMany({},function(e,d){})
    User.find({}, function (err, doc) {
        res.json(doc)
    })
})
Router.post('/login', function (req, res) {
    const {
        user,
        pwd
    } = req.body
    User.findOne({
        user,
        pwd: md5Pwd(pwd)
    },{'pwd':0}, function (err, doc) {
        if (!doc) {
            return res.json({
                code: 1,
                msg: '用户名或者密码错误'
            })
        }
        return res.json({
            code: 0,
            data: doc
        })
    })
})
Router.post('/register', function (req, res) {
    console.log('body', req.body)
    const {
        user,
        pwd,
        type
    } = req.body
    User.findOne({
        user
    }, function (err, doc) {
        if (doc) {
            return res.json({
                code: 1,
                msg: '用户名重复'
            })
        }
        User.create({
            user,
            type,
            pwd: md5Pwd(pwd)
        }, function (e, doc) {
            if (e) {
                return res.json({
                    code: 1,
                    msg: '后端出错了'
                })
            }
            return res.json({
                code: 0
            })
        })
    })
})
Router.get('/info', function (req, res) {
    return res.json({
        code: 1
    })
})

function md5Pwd(pwd) {
    const salt = 'imooc_is_good_yosef_yuan_!!!666'
    return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router