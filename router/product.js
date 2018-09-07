var express=require('express');
var router=express();


router.get('/',function (req,res) {
  res.send("welcome produit")
})

router.get('/addProduit',function (req,res) {
  res.send("welcome "+ req.query.name)
})


module.exports=router ;
