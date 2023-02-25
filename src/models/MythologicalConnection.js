const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const Connection = async () => {
    const URI = process.env.MONGODB_URI;
    try {
        await mongoose.connect(URI, {useUnifiedTopology: true, useNewUrlParser: true});
        console.log('Database connected succesfully')
    } catch (e) {
        console.log('Error while connecting with the database', e)
    }
}

module.exports = Connection
