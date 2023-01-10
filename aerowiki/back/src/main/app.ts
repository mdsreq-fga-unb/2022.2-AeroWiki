import express from 'express'
import { router } from './routes'
import MongoConnection from './config/database'
import cors from 'cors'

const app = express()
MongoConnection.connect()
app.use(express.json())
app.use(router)
app.use(cors())

export {app}