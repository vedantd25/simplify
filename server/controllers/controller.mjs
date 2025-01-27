import { nanoid } from 'nanoid';
import URL from '../models/model.mjs';

export async function handleGenerateNewShortURL(req, res) {
    const { url } = req.body;
    
    if (!url) return res.status(400).json({ error: 'URL is required' });

    const shortID = nanoid(10);  

    try{
        let existingEntry=await URL.findOne({redirectURL:url})
        if(existingEntry){
            return res.json({id:existingEntry.shortId})
        }else{
            const shortID=nanoid();
            await URL.create({
                shortId:shortID,
                redirectURL:url,
                visitHistory:[],
            })

            return res.json({id:shortId})
        }
    }catch(err){
        console.error("Error creating the url ",err);
        res.status(500).json({error:"Internal server error"})
    }
}

export async function analytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({ noOfClicks: result.visitHistory.length, visitHistory: result.visitHistory });
}

export async function redirectURL(req,res){
    const shortId = req.params.shortId;

    try {
      const entry = await URL.findOneAndUpdate(
        { shortId }, // Find the document with the matching short ID
        {
          $push: {
            visitHistory: {
              timestamp: Date.now(),
            },
          },
        }
      );
  
      if (!entry) {
        return res.status(404).json({ error: "Short URL not found" });
      }
  
      res.redirect(entry.redirectURL); // Redirect to the original URL
    } catch (error) {
      console.error("Error fetching short ID:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  
}
