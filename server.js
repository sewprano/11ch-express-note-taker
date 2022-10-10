const express = require('express');
const router = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use public folder
app.use(express.stastic('public'));

//html pages

//index
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/index.html'));
})

//notes

//api routes

//app.listen
