import mongoose from "mongoose"
import { User } from "../entities/User"

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    unique: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  }

})



export {UserSchema}