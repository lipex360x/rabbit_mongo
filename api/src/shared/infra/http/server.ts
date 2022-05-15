import { app, connectMongo } from './app'

import CandleCreateService from '@modules/candle/useCases/CandleCreate/CandleCreate.service'
import CandleRepository from '@modules/candle/infra/repositories/Candle.repository'

const createServer = async () => {
  const API_PORT = process.env.API_PORT
  console.log('\x1Bc')

  await connectMongo()

  const server = app.listen(API_PORT, () => {
    console.log(`🚀 Server started on port ${API_PORT}`)
  })

  const candleRepository = new CandleRepository()

  const candleService = new CandleCreateService(candleRepository, server)
  candleService.execute()

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
