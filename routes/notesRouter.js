const express = require('express');
const fs = require('fs');
const notesRouter = express.Router();
const uuid = require('./helpers/uuid');
const db = require('../db/db.json');


//The GET Route
notesRouter.get('/', (req, res) => {
    res.json(db);
});

//The POST route
notesRouter.post('/', (req, res) => {
    const {title, text} = req.body;

    //Check for title and body before saving
    if (title && text) {
        const newNote = {
            title, 
            text, 
            id: uuid()
        }

        //add to array
        db.push(newNote);

        //write to file
        fs.writeFile('./db/db.json', JSON.stringify(db, null, 4), error => {
            //error checking
            if (error) {
                console.error (error);
                res.status(500).json('Error saving file');
            } else {
                console.log ('new note added');

            //response
            res.json(response);
            }            
        });
    }
    else {

    }
})