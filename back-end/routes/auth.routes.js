const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

router.route('/')
  .post(authController.login)
  .get(authController.getInfo);

module.exports = router;

// const express = require('express')
// let router = express.Router()

// const {
//   body
// } = require('express-validator')

// const authController = require('../controllers/auth.controller')

// router.route('/')
//   .post([body('username').isAlphanumeric(),
//   body('password').isString()], authController.login)
  
//   .get(authController.getInfo)

// module.exports = router