const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

const queries = require('../db/queries');

router.get('/', async (req, res) => {
  fetch('http://hawaiibeachsafety.com/rest/conditions.json')
    .then(response => response.json())
    .then(response => res.json(response));
});

module.exports = router;
