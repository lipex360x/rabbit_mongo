import { Channel, connect } from 'amqplib'

const mqConnection = async () : Promise<Channel> => {
  try {
    const connection = await connect(process.env.RABBIT_URL)
    const channel = await connection.createChannel()
    await channel.assertQueue(process.env.QUEUE_NAME)
    console.log('🚀 Connected to Rabbit MQ')
    return channel
  } catch (error) {
    console.log('❌ Connection to RabbitMQ failed')
    console.log(error)
    return null
  }
}

export default mqConnection
