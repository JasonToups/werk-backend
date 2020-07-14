/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* ------ ROUTES ------ */

// index
router.get('/', controllers.awsPresigner.generateGetUrl);

// update
router.put('/:id', controllers.awsPresigner.generateGetUrl);

/* ------ EXPORT ------ */

module.exports = router;
