import 'dotenv/config'

import rabbitConnection from '@shared/infra/rabbitmq'
import MessageChannelService from '@modules/candles/useCases/MessageChannel/MessageChannel.service'

const boot = async () => {
  const mq = await rabbitConnection()
  console.log('🚀 Boot started')

  const messageChannelService = new MessageChannelService(mq)
  await messageChannelService.execute()
}

boot()
