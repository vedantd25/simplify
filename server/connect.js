const mongoose=require('mongoose')
const dotenv=require('dotenv')

dotenv.config()

const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.ATLAS_URL);
    console.log('Mongo Atlas connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports={
  connectToMongoDB
}
