import 'dotenv/config'

import rabbitConnection from '@shared/infra/rabbitmq'

const boot = async () => {
  await rabbitConnection()
}

boot()
