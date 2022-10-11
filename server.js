const express = require('express');
const apiRouter = require('./routes');
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// use public folder
app.use(express.static('public'));


//api routes
//index
app.get('*', (req, res) => {
    res.sendFile(path.join(_dirname, '/public/index.html'));
});
//notes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

//app.listen
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});

//testing heroku deployment