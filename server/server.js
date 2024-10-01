const express=require("express");
const {connectToMongoDB}=require("./connect")
const app=express();
const PORT =8001;
const path=require("path")
const URL=require('./models/model')
const urlRoute=require('./routes/routes')
const cors = require('cors');

app.use(cors());
app.options('*', cors());

connectToMongoDB();

app.use(express.json())
app.use("/url",urlRoute);

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
    console.log(`Server running on port ${PORT}`);
})