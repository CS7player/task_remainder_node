const { default: mongoose } = require("mongoose");

const username = 'username';
const password = 'Password';
const connect = `mongodb+srv://${username}:${password}@chandra.2tw00.mongodb.net/?retryWrites=true&w=majority&appName=Chandra`;
const db = mongoose.connect(connect);

module.exports = db;
