import http from 'http'
import { app, connectMongo } from './app'

import socketio from '@shared/infra/socket'
import rabbitConnection from '@shared/infra/rabbitmq'

const createServer = async () => {
  const API_PORT = process.env.API_PORT

  await connectMongo()
  await rabbitConnection()

  const server = http.createServer(app)

  app.listen(API_PORT, () => {
    console.log('🚀 Server started on port 4000')

    socketio.openConnection(server)
  })

  process.on('SIGINT', async () => {
    server.close()
    console.log('App server and connection to MongoDB closed')
  })

  // process.on('SIGTERM', async () => {
  //   server.close()
  //   console.log('App server and connection to MongoDB closed')
  // })
}

createServer()
