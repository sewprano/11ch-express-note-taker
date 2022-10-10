const express = require('express');
const router = express.Router();
const notesRouter = require('./notesRouter');

apiRouter.use('/notes', notesRouter)
