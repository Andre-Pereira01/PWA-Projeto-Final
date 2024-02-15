const fs = require('fs')
const handlebars = require('handlebars')
const nodemailer = require('nodemailer')
const CONFIG = require('../config/config')

module.exports = {
    sendEmail(emailData, callback) {
        let email = fs.readFileSync(__dirname + '/../views/email.hbs', 'utf8')
        let compiled_email = handlebars.compile(email)({
            name: emailData.name,
            title: emailData.title,
            summary: emailData.summary,
            text: emailData.text
        })
        let transporter = nodemailer.createTransport(CONFIG.email)
        let mail_options = {
            from: CONFIG.email.auth.user,
            to: emailData.email,
            subject: emailData.subject,
            html: compiled_email,
            bcc: CONFIG.email.auth.user
        }
        transporter.sendMail(mail_options, (error) => {
            if (error) {
                callback(error)
            }
            callback()
        })
    }
}