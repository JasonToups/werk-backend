/* ------ IMPORTS ------ */
const express = require('express');
const router = express.Router();
const controllers = require('../controllers')

/* ------ ROUTES ------ */

// test
router.get('/test', controllers.post.test);

// index
router.get('/', controllers.post.index);

// create
router.post('/', controllers.post.create);

// show 
router.get('/:id', controllers.post.get);

// show user posts
router.get('/user/:id', controllers.post.getUserPosts);

// update
router.put('/:id', controllers.post.put);

// delete
router.delete('/:id', controllers.post.destroy);

/* ------ EXPORT ------ */

module.exports = router;