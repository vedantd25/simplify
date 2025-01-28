import express from 'express';
import { connectToMongoDB } from './connect.mjs';
import URL from './models/model.mjs';
import urlRoute from './routes/routes.mjs';
import cors from 'cors';

const app = express();
const PORT = 8001;


const corsOptions = {
    origin: 'http://localhost:5173',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

connectToMongoDB();

app.use(express.json());
app.use("/url", urlRoute);

app.get("/:shortId", async (req, res) => {
    const shortId = req.params.shortId;
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

    res.redirect(entry.redirectURL);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
