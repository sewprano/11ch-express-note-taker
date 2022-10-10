const express = require('express');
const apiRouter = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use public folder
app.use(express.stastic('public'));

//html pages
//index
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/index.html'));
});
//notes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//api routes

//app.listen
