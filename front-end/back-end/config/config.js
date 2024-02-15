require('dotenv').config({ path: '../private/.env' })


module.exports = {
    mongodb: {
        uri: 'mongodb://localhost:27017/pwa',
        collections: {
            users: 'users',
            notifications: 'notifications',
            socios: 'socios'
        }
    },
    auth: {
        expiration_time: 15000, //segundos
        issuer: 'ENTA'      
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