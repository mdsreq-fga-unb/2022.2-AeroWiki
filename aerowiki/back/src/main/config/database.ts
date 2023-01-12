import mongoose from 'mongoose';
// import dotenv from 'dotenv';
// dotenv.config( {path: '__dirname + ../../env/.env'} )

// const Mongo_URI = process.env.DB_URI

class MongoConnection {
  async connect(): Promise<void>{
     await mongoose.connect("mongodb+srv://admin:aerowiki23@aerowiki.mefslkx.mongodb.net/aerowiki?retryWrites=true&w=majority")
     console.log("database connected")
  }
}
export default new MongoConnection();