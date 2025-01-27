import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
        required: true,
    },
    visitHistory: [
        {  
            timestamp: { type: Number }
        }
    ]
}, { timestamps: true });

const URL = mongoose.model('url', urlSchema);//mongoose model is basically the name of db in mongodb.mongodb converts it to plural form i.e renaming it as 'urls'
//URL is the actual name of the model by which we can interact with the database.

export default URL;
