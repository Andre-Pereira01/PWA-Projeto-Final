const express = require('express')
let router = express.Router()

const notificationController = require('../controllers/notification.controller')

const {
  body,
} = require('express-validator')

const CONFIG = require('../config/config')

router.route('/')
  .post([body('title').isString(),
  body('summary').isString(),
  body('text').isString(),
  body('notifEmail').isBoolean(),
  body('notifPage').isBoolean(),
  ], notificationController.create)
  .get(notificationController.get)

module.exports = router