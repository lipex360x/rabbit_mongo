import 'reflect-metadata'
import 'dotenv/config'
import express from 'express'
import cors from 'cors'

import routes from '@shared/infra/http/routes'

import '@shared/containers'

import connectMongo from '@shared/infra/mongoose'

const app = express()

app.use(cors())
app.use(express.json())
app.use(routes)

export { app, connectMongo }
