const mongoose = require('mongoose')

// const DB_URL = "mongodb://127.0.0.1:27017/imooc-chat"
const DB_URL = 'mongodb://6e_hr:123456xyz@ds261430.mlab.com:61430/6e_hr'
mongoose.connect(DB_URL)

const models = {
    user: {
        'user': { type: String, require: true },
        'pwd': { type: String, require: true },
        'type': { type: String, require: true },
        'avatar': { type: String },
        'desc': { type: String },
        'title': { type: String },
        'company': { type: String },
        'money': { type: String },
    },
    chat: {

    }
}

for (let m in models) {
    mongoose.model(m, new mongoose.Schema(models[m]))
}

module.exports = {
    getModule: function (name) {
        return mongoose.model(name)
    }
}