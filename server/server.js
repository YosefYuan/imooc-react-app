const express = require('express');
const mongoose = require('mongoose')

const DB_URL = "mongodb://127.0.0.1:27017/imooc"
mongoose.connect(DB_URL)
mongoose.connection.on('connected', function () {
    console.log('mongo connect success')
})

const User = mongoose.model('user', new mongoose.Schema({
    user: { type: String, require: true },
    age: { type: Number, require: true }
}))

// User.create({
//     user: 'xiaoming',
//     age: 12
// }, function (err, doc) {
//     if (!err) {
//         console.log(doc)
//     } else {
//         console.log(err)
//     }
// })

User.remove({age:18},function(err,doc){
  console.log(doc)  
})
User.update({'user':'xiaoming'},{'$set':{age:26}},function(err,doc){
    console.log(doc);
})
const app = express();

app.get('/', function (req, res) {
    User.find({},function(err,doc){
        return res.json(doc)
    })
})
app.get('/delete',function(err,doc){
})
app.get('/data', function (req, res) {
    User.findOne({user:'xiaoming'},function(err,doc){
        res.json(doc)
    })
})

app.listen(9093, function () {
    console.log('Node app start at port 9093');
})