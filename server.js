const express = require('express');
const mongoose = require('mongoose');
const http = require('http');

const users = require('./routes/api/users');
const profile = require('./routes/api/profile');
const posts = require('./routes/api/posts');


const app = express();
const server = http.createServer(app);

//DB Config 
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected !'))
    .catch(err => console.log(err));


app.get('/', (req, res) => res.send('Hello!'));

// Use Routes
app.use('/api/users', users);
app.use('/api/profile', profile);
app.use('/api/posts', posts);

const port = process.env.PORT || 5000 ;
const ip = process.env.IP || "0.0.0.0";

server.listen(port, ip, () => {
    const addr = server.address();
    console.log(`Server running on ${addr.address}:${port}`);
});
