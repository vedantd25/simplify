const shortid = require("shortid");
const URL = require("../models/model");

async function handleGenerateNewShortURL(req, res) { //Used to generate a shortID
    const body = req.body;
    if (!body.url) return res.status(400).json({ error: 'URL is required' });
    
    const shortID = shortid.generate();  

    await URL.create({
        shortId: shortID,
        redirectURL: body.url,
        visitHistory: [],
    });

    return res.json({ id: shortId });
}

async function analytics(req,res){
    const shortId=req.params.shortId;
    const result=await URL.findOne({shortId});
    return res.json({noOfClicks:result.visitHistory.length,visitHistory:result.visitHistory})
    
}

module.exports = {
    handleGenerateNewShortURL,
    analytics
};
