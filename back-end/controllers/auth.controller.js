const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const authMessages = require('../messages/auth.messages');
const CONFIG = require('../config/config');


exports.getInfo = (req, res) => {
    let message = authMessages.success.s1;
    message.body = req.user;
     return res.status(message.http).send(message);
}

exports.login = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { username, password } = req.body;
        const user = await User.findOne({ username });

        if (!user || !bcrypt.compareSync(password, user.password)) {
            console.log();
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const userData = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            morada: user.morada,
            level: user.level,
            expiresIn: CONFIG.auth.expiration_time
        };

        return res.status(200).json(userData);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
};
exports.checkAuth = (req, res) => {
    let message = authMessages.success.s0;
    message.body = req.user;
    return res.status(message.http).send(message);
}
