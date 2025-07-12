// models/routers/router.js

const express = require('express');
const router = express.Router();
const { getHome, postSnippet } = require('../../controllers/controller');

// Home page (GET) & snippet submission (POST)
router.get('/', getHome);
router.post('/add-snippet', postSnippet);

module.exports = router;
