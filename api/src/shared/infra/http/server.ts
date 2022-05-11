import { app, connectMongo } from './app'

const createServer = async () => {
  const API_PORT = process.env.API_PORT

  await connectMongo()

  const server = app.listen(API_PORT, () => console.log('🚀 Server started on port 4000'))

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
