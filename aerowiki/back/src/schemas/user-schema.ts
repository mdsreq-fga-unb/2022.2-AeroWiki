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
    type: String,
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

  telephone: {
    type: String,
  },

  birthdate: {
    type: String,
  },

  rg: {
    type: String,
    required: true,
  },

  cpf: {
    type: String,
    required: true,
  },

  active: {
    type: Boolean,
  }

})



export {UserSchema}