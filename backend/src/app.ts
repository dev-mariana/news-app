import 'reflect-metadata'
import bodyParser from 'body-parser'
import express, { Application } from 'express'
import router from './routes/routes'

const app: Application = express()

app.use(bodyParser.json())
app.use('/api', router)

export { app }
