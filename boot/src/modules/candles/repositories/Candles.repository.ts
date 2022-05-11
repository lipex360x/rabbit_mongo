import Colors from '../enumerators/Colors'

export default class CandlesRepository {
  low: number
  high: number
  open: number
  close: number

  currency: number
  values: number[]

  color: Colors
  finalDateTime: Date

  constructor () {
    this.low = Infinity
    this.high = 0
    this.open = 0
    this.close = 0
    this.currency = 0
    this.values = []
    this.color = Colors.UNDETERMINED
  }

  addValue (value: number) {
    this.values.push(value)

    if (this.values.length === 1) this.open = value

    if (this.low > value) this.low = value

    if (this.high < value) this.high = value
  }

  closeCandle () {
    if (this.values.length === 0) return

    this.close = this.values[this.values.length - 1]
    this.finalDateTime = new Date()

    if (this.open > this.close) this.color = Colors.RED
    if (this.close > this.open) this.color = Colors.GREEN
  }

  toSimpleObject (currency: number) {
    this.currency = currency

    const { values, ...obj } = this
    return obj
  }
}
