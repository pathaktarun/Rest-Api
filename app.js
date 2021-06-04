const express = require('express');
const Mongoose = require('mongoose');
const app = express();
require('dotenv/config');
const postsroute = require('./Routes/posts');
app.use(express.json());
app.use('/posts', postsroute);
app.get('/', (req, res) => {
    res.send('we are on home');
});



Mongoose.connect(
    process.env.DB_CONNECTION, () => {
        console.log('Database connected');
    }
)

app.listen(1000, () => {
    console.log('Server started at port 1000');
});