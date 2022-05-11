import { Channel, connect } from 'amqplib'

const rabbitConnection = async () : Promise<Channel> => {
  try {
    console.log('\n📚 Trying to connect to RabbitMQ')
    const connection = await connect(process.env.RABBIT_URL)
    const channel = await connection.createChannel()
    await channel.assertQueue(process.env.QUEUE_NAME)
    console.log('📚 Connected to RabbitMQ')

    return channel
  } catch (error) {
    console.log('❌ Error while trying to connect to RabbitMQ')
    console.log(error)
    return null
  }
}

export default rabbitConnection
