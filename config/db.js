require("dotenv").load();


const mongoose=require("mongoose");
mongoose.set('strictQuery', false);



// mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>{
//     console.log("connected successddddddddddsdffsdsfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsd sdfsdf");
    
    
    
    
   
// }).catch(err=>{
//     console.log("connection fail");
// })
//asdasdaasdasd
const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}
module.exports=connectDB
/*

//Routes go here
app.all('*', (req,res) => {
    res.json({"every thing":"is awesome"})
})

//Connect to the database before listening
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("listening for requests");
    })
})
*/