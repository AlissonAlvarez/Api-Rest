const mongoose = require('mongoose');

const schemaMythologicals = new mongoose.Schema({
    image: String,
    name: String,
    category: String,
    description: String
})

module.exports = mongoose.model('mythologicals', schemaMythologicals);
