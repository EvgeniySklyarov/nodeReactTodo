const express = require('express');
const todo = require('./routes/todo.route');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');

let dev_db_url = 'mongodb://localhost:27017/todosDb';

const mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useNewUrlParser: true });
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use('/todos', todo);

let port = 3010;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});