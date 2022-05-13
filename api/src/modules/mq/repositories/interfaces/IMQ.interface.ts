import { Channel } from 'amqplib'

type IMQProps = {
  consumer(): Channel
}

export default IMQProps
