const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller')

router.route('/')
    .post(userController.create)
    .get(userController.get);

router.route('/:id')
    .get(userController.getone)
    .put(userController.put)
    .delete(userController.delete)
    .patch(userController.update);

module.exports = router;
