const mongoose = require('mongoose');
const config= require('config');
const mongouri = config.get('mongoURI');

const connectDB = async () =>{
    try {
        await mongoose.connect(mongouri,{useNewUrlParser: true,
			useCreateIndex: true,
			useFindAndModify: false,
            useUnifiedTopology: true});
        console.log('MongoDb connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = connectDB;