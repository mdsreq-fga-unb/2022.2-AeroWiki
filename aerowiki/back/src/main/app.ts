import express from 'express'
import { router } from './routes'
import MongoConnection from './config/database'

const app = express()
MongoConnection.connect()
app.use(express.json())
app.use(router)

export {app}