
export type ConsumeProps = {
  queue_name: string
}

type IMQRepository = {
  consume(data: ConsumeProps): Promise<string>
}

export default IMQRepository
