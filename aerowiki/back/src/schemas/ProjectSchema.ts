import { ObjectId } from "mongodb"
import mongoose from "mongoose"
import { Project } from "../entities/Project"

const ProjectSchema = new mongoose.Schema<Project>({
  id:{
    type: ObjectId
  },
  
  name:{
    type: String,
    required: true
  },

  area:{
    type: String
  },

  subarea:{
    type: String
  },

  isfixed:{
    type: Boolean
  },

  editable:{
    type: Boolean
  },

  ongoing:{
    type: Boolean
  },

  active:{
    type: Boolean
  },

  project:{
    type: Object
  }

})

export {ProjectSchema}