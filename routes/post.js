/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

/* ------ ROUTES ------ */

// test
router.get('/:id/test', controllers.post.test)

// index
router.get('/posts', controllers.post.index);

// create
router.post('/posts', controllers.post.create);

// show 
router.get('/posts/:id', controllers.post.get);

// update
router.put('posts/:id', controllers.post.put);

// delete
router.delete('posts/:id', controllers.post.destroy);

/* ------ EXPORT ------ */

module.exports = router;