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

   
        const postData = req.body; 
        const inputusername = postData.username;
        const inputpassword = postData.password;

        const user = await User.findOne({ username:inputusername });
        
        if (!user) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        const isPasswordValid = inputpassword === user.password;
        await bcrypt.compare(inputpassword, user.password);
        
        console.log(isPasswordValid);
        console.log(user);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Credenciais inválidas.' });
        }

        // const jwt = require('jsonweb');
        // const secretKey = 'your_secret_key';

        // // Generate the JWT 
        // const token = jwt.sign({ user }, secretKey, { expiresIn: '1h' });
        const userData = {
            _id: user._id,
            firstname: user.firstname,
            lastname: user.lastname,
            morada: user.morada,
            level: user.level,
            expiresIn: CONFIG.auth.expiration_time,
            token: "adjlk212342345ytygfdsa65gf4dASDDSFGH32WSDFG"
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
