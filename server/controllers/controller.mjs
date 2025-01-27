import shortid from 'shortid';
import URL from '../models/model.mjs';

export async function handleGenerateNewShortURL(req, res) {
    const { url } = req.body;
    
    if (!url) return res.status(400).json({ error: 'URL is required' });

    const shortID = shortid.generate();  

    await URL.create({
        shortId: shortID,
        redirectURL: url,
        visitHistory: [],
    });

    return res.json({ id: shortID });
}

export async function analytics(req, res) {
    const shortId = req.params.shortId;
    const result = await URL.findOne({ shortId });
    return res.json({ noOfClicks: result.visitHistory.length, visitHistory: result.visitHistory });
}
