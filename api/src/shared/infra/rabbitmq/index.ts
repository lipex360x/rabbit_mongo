import { Channel, connect } from 'amqplib'

const rabbitConnection = async () : Promise<Channel> => {
  try {
    console.log('\n📚 Trying to connect to RabbitMQ')
    const connection = await connect(process.env.RABBIT_URL)
    const channel = await connection.createChannel()
    await channel.assertQueue(process.env.QUEUE_NAME)
    console.log('📚 Connected to RabbitMQ')
  } catch (error) {
    console.log('❌ Connection to RabbitMQ failed')
    console.log(error)
    return null
  }
}

export default rabbitConnection
