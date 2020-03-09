/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

/* ------ ROUTES ------ */

// test
router.get('/test', controllers.gig.test);

// index
router.get('/', controllers.gig.index);

// create
router.post('/', controllers.gig.create);

// show 
router.get('/:id', controllers.gig.get);

// update
router.put('/:id', controllers.gig.put);

// delete
router.delete('/:id', controllers.gig.destroy);

/* ------ EXPORT ------ */

module.exports = router;