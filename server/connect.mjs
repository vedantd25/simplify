import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log('Mongo Compass connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
