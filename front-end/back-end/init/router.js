module.exports = (app) => {
    app.use('/notification', require('../routes/notification.routes'))
    app.use('/user', require('../routes/user.routes'))
    app.use('/auth', require('../routes/auth.routes'))
}