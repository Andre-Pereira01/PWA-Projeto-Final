require('dotenv').config({ path: '../private/.env' })


module.exports = {
    mongodb: {
        uri: 'mongodb+srv://andre3699:andre.3699@pwa.dtzk1ty.mongodb.net/?retryWrites=true&w=majority',
        //'mongodb://localhost:27017/pwa',
        collections: {
            users: 'users',
            notifications: 'notifications',
        }
    },
    auth: {
        expiration_time: 15000, //segundos
        issuer: 'BMM'      
    },
    sanitize: {
        alphabeth: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËẼÌÍÎÏĨÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëẽìíîïĩðñòóôõöøùúûüýÿ\\ ',
        numerical: '0123456789'
    },
    email: {
        service: "Gmail",
        auth: {
            user: "jorgejesus6969696969@gmail.com",
            pass: "al74066@utad.eu"
        }
    }
}