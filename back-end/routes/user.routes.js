// const express = require('express');
// const router = express.Router();
// const userController = require('../controllers/user.controller');
// const authController = require('../controllers/auth.controller')

// router.route('/')
//     .post(userController.create)
//     .get(userController.get);

// router.route('/:id')
//     .get(userController.getone)
//     .put(userController.put)
//     .delete(userController.delete)
//     .patch(userController.update);

// module.exports = router;


const express = require('express')
let router = express.Router()

const userController = require('../controllers/user.controller')
const authController = require('../controllers/auth.controller')


const {
    body,
    param,
    //sanitizeBody,
} = require('express-validator')

const CONFIG = require('../config/config')

router.route('/')

    .post([body('firstname').isString(),
        body('lastname').isString(),
        body('name').isString(),
        body('cartaocidadao').isString(),
        body('nif').isString(),
        body('bdate').isString(),
        body('email').isString(),
        body('mobile').isNumeric(),
        body('notifications').isBoolean(),
        body('morada').isString(),
        body('codigopostal').isString(),
        body('freguesia').isString(),
        body('username').isAlphanumeric(),
        body('password').isString(),
        body('level').isString(),
        // sanitizeBody('firstname').whitelist(CONFIG.sanitize.alphabeth),
        // sanitizeBody('lastname').whitelist(CONFIG.sanitize.alphabeth),
        // sanitizeBody('name').whitelist(CONFIG.sanitize.alphabeth),
        // sanitizeBody('cartaocidadao').whitelist(CONFIG.sanitize.numerical),
        // sanitizeBody('nif').whitelist(CONFIG.sanitize.numerical)
    ], userController.create)

.get(authController.checkAuth, userController.get)

router.route('/:id')
    .get([param('id').isMongoId()], authController.checkAuth, userController.getone)
    .put([param('id').isMongoId()], userController.put)
    .delete([param('id').isMongoId()], authController.checkAuth, userController.delete)
    .patch([param('id').isMongoId()], authController.checkAuth, userController.update)

module.exports = router