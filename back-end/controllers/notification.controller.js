const Notification = require('../models/notification.model');
const User = require('../models/user.model');
const notificationMessages = require('../messages/notification.messages')
const {
    validationResult
} = require('express-validator')

let { sendEmail } = require('../controllers/email.controller');

exports.create = (req, res) => {
    const errors = validationResult(req).array()
    if (errors.length > 0) return res.status(406).send(errors)
    Notification.findOne({ 'title': req.body.title })
        .exec()
        .then((notification) => {
            if (notification) return res.status(notificationMessages.success.s3.http).send(notificationMessages.success.s3)
            else {
                const newnotification = new Notification({
                    title: req.body.title,
                    summary: req.body.summary,
                    text: req.body.text,
                    notifEmail: req.body.notifEmail,
                    notifPage: req.body.notifPage
                })
                newnotification.save()
                    .then((notification, error) => {
                        if (error) throw error
                        let message = notificationMessages.success.s0
                        message.body = notification
                        if (notification.notifEmail == true) {
                            User.find({ 'notifications': true })
                                .exec()
                                .then((users) => {
                                    for (let i = 0; i < users.length; i++) {
                                        let emailData = {
                                            name: users[i].name,
                                            email: users[i].email,
                                            subject: 'Notícias BMM',
                                            title: notification.title,
                                            summary: notification.summary,
                                            text: notification.text
                                        }
                                        sendEmail(emailData, (error) => {
                                            if (error) return res.status(notification.error.e0.http).send(notificationMessages.error.e0)
                                        })
                                    }
                                })
                                .catch((error) => {
                                    return res.status(notification.error.e0.http).send(notificationMessages.error.e0)
                                })
                            return res.status(notificationMessages.success.s0.http).send(message)
                        }
                        return res.status(notificationMessages.success.s0.http).send(message)

                    })
                    .catch((error) => {
                        return res.status(notification.error.e0.http).send(notificationMessages.error.e0)
                    })
            }
        })
}

exports.get = ((req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors)
    Notification.find()
        .exec()
        .then((notification, error) => {
            if (error) throw error
            if (!notification) return res.status(notification.error.e0.http).send(notificationMessages.error.e0)
            let message = notificationMessages.success.s1
            message.body = notification
            return res.status(message.http).send(message)
        })
        .catch((error) => {
            console.log(error)
        })
})