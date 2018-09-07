var express=require('express');
var cors=require('cors');
var user=require('./router/user');
var  app=express();
app.use(cors())
var bodyParser = require('body-parser')
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/users',user)
app.get('/',function (req,res) {
  res.send(' welcome to my server')

})
app.get('/home',function (req,res) {

  res.send('welcome')
})

app.listen(3000,function () {

   console.log("okk")
})
