import { nanoid } from 'nanoid';
import URL from '../models/model.mjs';

// URL Normalizer Function
function normalizeURL(url) {
  // Check if the URL starts with "http://" or "https://"
  if (!/^https?:\/\//i.test(url)) {
    return `https://${url}`;
  }
  return url; // Return the URL unchanged if it already starts with "http://" or "https://"
}

export async function handleGenerateNewShortURL(req, res) {
  const { url } = req.body;

  if (!url) return res.status(400).json({ error: 'URL is required' });

  try {
    
    const normalizedURL = normalizeURL(url);

    // Check if the URL already exists
    let existingEntry = await URL.findOne({ redirectURL: normalizedURL });
    if (existingEntry) {
      return res.json({ id: existingEntry.shortId });
    } else {
      const shortID = nanoid(10);
      await URL.create({
        shortId: shortID,
        redirectURL: normalizedURL,
        visitHistory: [],
      });

      return res.json({ id: shortID });
    }
  } catch (err) {
    console.error("Error creating the URL:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function analytics(req, res) {
  const shortId = req.params.shortId;

  try {
    const result = await URL.findOne({ shortId });
    if (!result) {
      return res.status(404).json({ error: "Short URL not found" });
    }

    return res.json({
      noOfClicks: result.visitHistory.length,
      visitHistory: result.visitHistory,
    });
  } catch (err) {
    console.error("Error fetching analytics:", err);
    res.status(500).json({ error: "Internal server error" });
  }
}

export async function redirectToURL(req, res) {
  const shortId = req.params.shortId;

  try {
    const entry = await URL.findOneAndUpdate(
      { shortId }, 
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

    let redirectURL = entry.redirectURL;

    // Ensure the URL is normalized before redirecting
    if (!/^https?:\/\//i.test(redirectURL)) {
      redirectURL = `https://${redirectURL}`;
    }

    res.redirect(redirectURL); // Redirect to the original URL
  } catch (error) {
    console.error("Error fetching short ID:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
