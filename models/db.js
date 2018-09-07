var mongoose=require('mongoose');
var con ='mongodb://127.0.0.1/mydemo';
mongoose.connect (con);
var db =mongoose.connection;
db.on('error',console.error.bind(console,'mongodb connection error:'));
