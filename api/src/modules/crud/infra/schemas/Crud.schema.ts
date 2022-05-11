import { Document, Schema, model } from 'mongoose'

export type CrudProps = {
  _id?: string
  content: string
  read?: boolean
} & Document

const CrudSchema = new Schema(
  {
    content: { type: String, trim: true, required: true },
    read: { type: Boolean, default: false }
  },

  { timestamps: true }
)

const CrudModel = model<CrudProps>('Crud', CrudSchema)

export default CrudModel
