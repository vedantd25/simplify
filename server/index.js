const express=require("express");
const {connectToMongoDB}=require("./connect")
const app=express();
const PORT =8001;
const path=require("path")
const URL=require('./models/model')
const urlRoute=require('./routes/routes')
const cors = require('cors');

app.use(cors());
app.options('*', cors()); // Allow preflight requests


connectToMongoDB('mongodb://0.0.0.0:27017/short-url')
.then(()=>{
    console.log("MongoDB Connected");
})

app.use(express.json())
app.use("/url",urlRoute);
app.set("view engine","ejs");
app.set("views",path.resolve("./views"))

app.get("/test",async (req,res)=>{
    return res.render('home');
})

app.get("/:shortId",async (req,res)=>{
    
    const shortId=req.params.shortId;
    const entry=await URL.findOneAndUpdate({
        shortId,
    },
    {
        $push:{
        visitHistory:{
            timestamp:Date.now(),
        },
        },
    }
    );

    if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
      }

    res.redirect(entry.redirectURL)
})

app.listen(PORT,()=>{
    console.log('Server running on port 8001');
})