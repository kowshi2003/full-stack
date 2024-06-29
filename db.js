const mongoose=require('mongoose');
mongoose.connect(mongoose://localhost:27017/ecommerce',{
useNewUrlParse:true,
useUnifiedTopology:true,
useCreateIndex:true,
useFindAndModify:false,
});
module.exports=mongoose;