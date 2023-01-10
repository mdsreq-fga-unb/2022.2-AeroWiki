import mongoose from "mongoose"
import { User } from "../entities/User"

const UserSchema = new mongoose.Schema<User>({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
  },

  unb_id: {
    type: Number,
    required: true,
    unique: true,
  },

  area: {
    type: String,
    required: true,
  },

  role: {
    type: String,
    required: true,
  },

  rg: {
    type: Number,
  },

  cpf: {
    type: Number,
  }

})



export {UserSchema}