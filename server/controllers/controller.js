const shortid = require("shortid");
const URL = require("../models/model");

async function handleGenerateNewShortURL(req, res) {
    // Extract 'url' from the request body
    const { url } = req.body;
    
    // Check if URL is provided
    if (!url) return res.status(400).json({ error: 'URL is required' });

    // Generate a short ID
    const shortID = shortid.generate();  

    // Save to the database
    await URL.create({
        shortId: shortID,
        redirectURL: url,
        visitHistory: [],
    });

    // Return the generated shortId
    return res.json({ id: shortID });
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
