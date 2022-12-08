require("./config/db")
const app=require("express")();
const bodyParser=require("express").json;
const port = process.env.PORT || 3000;
const User=require("./models/User")
const cors=require("cors");


app.use(bodyParser())
app.use(cors());
app.get("/",(req,res)=>{
    res.send("asdfffffffff")
})
app.post("/any",(req,res)=>{
    console.log("hitterdddd seccess",req);
    const user=new User({
        name:"SAdsada",
        email:"om@gmail.com"
    })
    user.save().then(()=>{
        res.json({
            message :"Seccess fully addd",
            data:user
        }).catch(err=>{
            res.json({
                message:"fail",
                error:err
            })
        })
        
    })
})

app.listen(port,()=>{
    console.log(`alive at ${port}`);
})
