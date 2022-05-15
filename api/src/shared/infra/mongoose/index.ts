import { connect } from 'mongoose'

const connectDB = async () => {
  try {
    console.log('\n📚 Trying to connect to MongoDB')

    await connect(process.env.MONGO_URL)
    console.log('🚀 Connected to database MongoDB')
  } catch (error) {
    console.log('❌ Fail to Connect to MongoDB', error)
    process.exit()
  }
}

export default connectDB
