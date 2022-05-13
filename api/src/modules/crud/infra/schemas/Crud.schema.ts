import { Document, Schema, model } from 'mongoose'

export type CrudProps = {
  currency: string
  finalDateTime: Date
  open: number
  close: number
  high: number
  low: number
  color: string
} & Document

const CrudSchema = new Schema<CrudProps>(
  {
    currency: { type: String, trim: true, required: true },
    finalDateTime: { type: Date },

    open: { type: Number, required: true },
    close: { type: Number, required: true },
    high: { type: Number, required: true },
    low: { type: Number, required: true },

    color: { type: String, required: true }
  },

  { timestamps: true }
)

const CrudModel = model<CrudProps>('Candle', CrudSchema)

export default CrudModel
