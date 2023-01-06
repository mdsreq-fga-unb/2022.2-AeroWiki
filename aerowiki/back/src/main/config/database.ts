import mongoose, { Mongoose } from 'mongoose';
class MongoConnection {
  async connect(): Promise<void>{
     await mongoose.connect('mongodb+srv://admin:admin@aerowiki.lobnenq.mongodb.net')
     console.log("database connected")
  }
}
export default new MongoConnection();