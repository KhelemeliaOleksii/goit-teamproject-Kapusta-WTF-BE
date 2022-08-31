const colors = require('colors')

require('./config/setEnvVars')
const app = require('./app')
const connectDB = require('./config/connectDB')

const start = async () => {
  try {
    const { DB_HOST, PORT } = process.env
    await connectDB(DB_HOST)

    app.listen(PORT, () => {
      console.log(`Server running. Use our API on port: ${PORT}`)
    })
  } catch (error) {
    console.log(colors.red(error.message.bold))
    process.exit(1)
  }
};

(async () => {
  await start()
})()
