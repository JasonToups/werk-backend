const express = require('express');
const router = express.Router();
const controller = require('../controllers');

// Index Users
router.get('/users/', controller.user.index);

// Show User
router.get('/users/:id', controller.user.showUser);

// Update User
router.put('/users/:id', controller.user.updateUser);

module.exports = router;