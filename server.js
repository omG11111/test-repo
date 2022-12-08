const app=require("express")();
require("dotenv").config
const bodyParser=require("express").json;
const port = process.env.PORT || 3000;
const User=require("./models/User")
const cors=require("cors");
// const db=require("./config/db");

const mongoose=require("mongoose");
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{useNewUrlParser:true,useUnifiedTopology:true});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}


app.use(bodyParser())
app.use(cors());
app.get("/",async (req,res)=>{
    res.send("asdfffffffff")
})
app.post("/any",async (req,res)=>{
    // console.log("hitterdddd seccess",req.ip);
    console.log("sd");

    
    // let user = new User({
    //     name:req.body.name,
    //     email:req.body.email
    // })
    // let use=await user.save();
  
    // // let useq=await User.insertOne({
    // //     name:req.body.name,
    // //     email:"sec"
    // // })
    // // res.send(useq,use)
    // res.send("hello")
    
})
// db.connectDB()
// app.listen(port,()=>{
//     console.log(`alive at ${port}`);
// })
connectDB().then(() => {
    app.listen(port, () => {
        console.log("listening for requests");
    })
})
