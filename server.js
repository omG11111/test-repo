require("./config/db")
const app=require("express")();
const bodyParser=require("express").json;
const port = process.env.PORT || 3000;
const User=require("./models/User")
const cors=require("cors");


app.use(bodyParser())
app.use(cors());
app.get("/",async (req,res)=>{
    res.send("asdfffffffff")
})
app.post("/any",async (req,res)=>{
    console.log("hitterdddd seccess",req);

    let user=new User({
        name:req.name,
        email:req.email
    })
    // user.save()
    // res.json(user);
    try {
        await user.save().then((dataa)=>{
            res.json({
                message :"Seccess fully addd",
                
            })})
        
    } catch (error) {
        res.json({
            message:"fail",
            error:err
        })
        
    }
    
})

app.listen(port,()=>{
    console.log(`alive at ${port}`);
})
