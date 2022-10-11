const express = require('express');
const router = express.Router();
const notesRouter = require('./notesRouter');

router.use('/notes', notesRouter)

module.exports = router;
