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

    
    const user = new User({
        name:req.body.name,
        email:req.body.email
    })
    user.save()
    res.json(user);

    // try {
    //     await user.save();
    //         res.json({
    //             message :"Seccess fully addd",
                
    //         })
        
    // } catch (erro) {
    //     res.json({
    //         message:"fail",
    //         error:erro
    //     })
        
    // }
    
})

app.listen(port,()=>{
    console.log(`alive at ${port}`);
})
