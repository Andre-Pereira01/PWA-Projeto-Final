const User = require('../models/user.model');
const Notification = require('../models/notification.model');
const bcrypt = require('bcryptjs'); 
const CONFIG = require('../config/config');
const createInitialUsers = async () => {
    try {
        const adminUser = await User.findOne({ 'username': 'admin' });

        if (!adminUser) {
            const admin = new User({
                firstname: 'Admin',
                lastname: 'User',
                name: 'Admin User',
                email: 'admin@example.com',
                nif: '12345678',
                morada: 'Rua do Admin',
                codigopostal: '1234-567',
                cartaocidadao: '123456789',
                freguesia: "Dsae",
                accepted: true, 
                notifications: true,
                level: 'admin',
                username: 'admin',
                password: 'admin',
            });

            await admin.save();
            console.log('Admin user created successfully.');
        }
        if (adminUser) {
            console.log('Admin user already exists.');
            return;
        }

    } catch (error) {
        console.error('Error creating initial users:', error);
    }
};

const createInitialNotifications = async () => {
    try {
        const notification = await Notification.findOne({ 'title': 'Bem vindo ao espaço sócio da BMM!' });

        if (!notification) {
            const notification = new Notification({
                title: 'Bem vindo ao espaço sócio!',
                summary: 'Um espaço de intregação e modernização da nossa banda.',
                text: 'Um espaço que permetirá a gestão eficiente e comunicação com os sócios…',
                notifEmail: false,
                notifPage: true,
            });

            await notification.save();
            console.log('Welcome notification created successfully.');
        }

        if (notification) {
            console.log('Welcome notification already exists.');
            return;
        }

    } catch (error) {
        console.error('Error creating initial notifications:', error);
    }
};

module.exports = (app, callback) => {
    const mongoose = require('mongoose');
    
    mongoose.connect(CONFIG.mongodb.uri).then(() => {
        console.log('---Connected to DB');
        createInitialUsers();
       // createInitialNotifications();
        if (callback) callback();
    }).catch((error) => {
        console.error('Error connecting to DB:', error);
    });
};

