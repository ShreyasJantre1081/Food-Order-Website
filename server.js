const express = require('express')
const mongoose = require('mongoose')
const UserSchema = require('../models/User')
require('dotenv').config()
const cors = require("cors")
const bcrypt=require('bcryptjs')

const app = express()
app.use(cors());
app.use(express.json());
const PORT = 3000

mongoose.connect(process.env.MONGO_URI).then(
    ()=>console.log('DB connected...')
).catch(
    (err)=>console.log(err)
)

app.post('/register',async(req,res)=>{
    const{username,email,password}=req.body
    try{
        const hashedPassword = await bcrypt.hash(password,10)
        const user = new({username,email,password:hashedPassword})
        await user.save()
        res.json({message:"User Registered"})
        console.log("User Registration Complete")
    }
    catch(err){
        console.log(err)
    }
})

app.post('/login', async(req, res)=>{
    const {email,password}=req.body
    try{
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) 
            {
             return res.status(400).json({ message: "Invalid Credentials" });
            }
          res.json({ message: "Login Successful", username: user.username });
        }
    catch(err)
    {
        console.log(err)
    }
})

mongoose.connect("mongodb+srv://shreyasmongo:Shreyas2004@cluster0.ientz.mongodb.net/backend?retryWrites=true&w=majority&appName=Cluster0").then(()=>{
    console.log("DB connected successfully")
}).catch((err)=>console.log(err))

app.listen(PORT,(err)=>{ 
    if(err){
        console.log(err)
    }
    console.log("server is running on port : "+PORT)

})

app.listen(PORT, () => console.log("Server running on port 3000"));