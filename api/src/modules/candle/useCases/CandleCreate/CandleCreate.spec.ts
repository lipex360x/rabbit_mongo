import 'reflect-metadata'
import 'dotenv/config'

import express from 'express'
import http from 'http'

import CandleCreateService from './CandleCreate.service'

import FakeCandleRepository from '@modules/candle/repositories/fakes/FakeCandle.repository'

let candleCreateService: CandleCreateService
let fakeCandleRepository: FakeCandleRepository
let server: http.Server

const app = express()

describe('Candle Create', () => {
  beforeAll(() => {
    fakeCandleRepository = new FakeCandleRepository()
    server = app.listen(9999)
    candleCreateService = new CandleCreateService(fakeCandleRepository, server)
  })

  afterAll(async () => {
    return server && server.close()
  })

  it('should be able to read a candle', async () => {
    const newContent = await candleCreateService.execute()

    expect(newContent).toHaveProperty('consumerTag')
  })
})
