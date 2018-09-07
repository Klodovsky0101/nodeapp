var express=require('express');
var router=express();
var usermo=require('../models/userM');
var con =require('../models/db');


router.get('/all',function (req,res) {
  usermo.find({},function (err,result) {
    if (err){
      throw err;

    }
    res.send(result);
  })

});
router.get ('/addu',function (req,res) {
  var user=new usermo({lastName:req.query.lastName,firstName:req.query.firstName,phone:req.query.phone})
  user.save(function (err) {
    if(err) return handleError(err);
    res.send("ok saved")

  })

})
router.put ('/edit/:_id',function (req,res) {
  var result=req.body
  usermo.findByIdAndUpdate(req.params._id,result,function (err,result) {
    if (err) {
      throw err
    }else {
      res.send(result)
    }

  })

})
router.delete ('/deluser/:_id',function (req,res) {
  usermo.findByIdAndRemove(req.params._id,function (err,result) {
    if(err){
      throw err
    }
    else{
      res.send(result)
    }
  })

})
router.get('/find/:_id',function(req,res){
  usermo.findById(req.params._id,function (err,result) {
    if(err){
      throw err
    }
    else{
      res.send(result)
    }
  })


})
router.get('/key',function(req,res){

  usermo.find({"$or":[{"lastName":req.query.mot},{"firstName":req.query.mot},{"phone":req.query.mot}]},function (err,result) {
    if(err){
      throw err
    }
    else{
      res.send(result)
    }
  })


})


router.get('/add',function (req,res) {
  res.send("welcome "+ req.query.name)})


router.get('/addP/:name',function (req,res) {
  res.send("welcome "+ req.params.name)})


router.post('/post',function (req,res) {
  res.send("welcome user"+req.query.name)})

router.post('/postB',function (req,res) {
  res.send("welcome user"+req.body.name)})


module.exports=router ;
