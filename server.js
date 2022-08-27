const colors = require('colors');

const configDotEnv = require('./config/setEnvVars');
const app = require('./app');
const connectDB = require('./config/connectDB');

const start = async () => {
    try {
        const { PORT = 5000 } = process.env;
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running. Use our API on port: ${PORT}`);
        })
    } catch (error) {
        console.log(colors.red(error.message.bold));
        process.exit(1);
    }
}


(async () => {
    await start()
})();