/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

/* ------ ROUTES ------ */

// test
router.get('/:id/test', controllers.post.test)

// index
router.get('/', controllers.post.index);

// create
router.post('/', controllers.post.post);

// show 
router.get('/:id', controllers.post.get);

// update
router.put('/:id', controllers.post.put);

// delete
router.delete('/:id', controllers.post.destroy);

/* ------ EXPORT ------ */

module.exports = router;