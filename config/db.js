require("dotenv").config();

const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
    console.log("connected successddddddddddsdffsdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd sdfsdf");
    
    
    
    
   
}).catch(err=>{
    console.log("connection fail");
})
//asdasdaasdasd