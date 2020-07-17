/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers');

/* ------ ROUTES ------ */

// index
router.get('/generate-get-url', controllers.awsPresigner.generateGetUrl);

// update
router.get('/generate-put-url', controllers.awsPresigner.generatePutUrl);

/* ------ EXPORT ------ */

module.exports = router;
