const mongoose = require('mongoose')

const connectDb = async () => {
    try {
        mongoose.set('strictQuery', true);
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDb connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
}

module.exports = connectDb