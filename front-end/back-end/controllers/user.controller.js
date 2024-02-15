const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const userMessages = require('../messages/user.messages');

exports.create = (req, res) => {
    const errors = validationResult(req).array();
    if (errors.length > 0) return res.status(406).send(errors);
    
    User.findOne({ 'email': req.body.email })
        .exec()
        .then((user) => {
            if (user) res.status(userMessages.success.s3.http).send(userMessages.success.s3);
            else {
                const newuser = new User({
                    firstname: req.body.firstname,
                    lastname: req.body.lastname,
                    name: req.body.name,
                    cartaocidadao: req.body.cartaocidadao,
                    nif: req.body.nif,
                    email: req.body.email,
                    bdate: req.body.bdate,
                    mobile: req.body.mobile,
                    accepted: req.body.accepted,
                    notifications: req.body.notifications,
                    morada: req.body.morada,
                    codigopostal: req.body.codigopostal,
                    freguesia: req.body.freguesia,
                    level: req.body.level,
                    username: req.body.username,
                    password: req.body.password,
                    
                });
                newuser.save()
                    .then((user, error) => {
                        if (error) throw error;
                        let message = userMessages.success.s0;
                        message.body = user;
                        return res.status(message.http).send(message);
                    });
            }
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
};

exports.get = ((req, res) => {
    User.find()
        .exec()
        .then((user, error) => {
            if (error) throw error;
            let message = userMessages.success.s1;
            message.body = user;
            return res.status(message.http).send(message);
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
});

exports.put = (req, res) => {
    User.findOneAndUpdate({ '_id': { $eq: req.params.id } }, { $set: { 'accepted': true } }, { new: true })
        .exec()
        .then((user, error) => {
            if (error) throw error;
            if (!user) return res.status(userMessages.error.e0.http).send(userMessages.error.e0);
            let message = userMessages.success.s1;
            message.body = user;
            return res.status(message.http).send(message);
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
};

exports.update = (req, res) => {
    User.findOneAndUpdate({ '_id': { $eq: req.params.id } }, {
            $set: {
                'firstname': req.body.firstname,
                'lastname': req.body.lastname,
                'name': req.body.name,
                'cartaocidadao': req.body.cartaocidadao,
                'nif': req.body.nif,
                'bdate': req.body.bdate,
                'mobile': req.body.mobile,
                'morada': req.body.morada,
                'codigopostal': req.body.codigopostal,
                'freguesia': req.body.freguesia,
            }
        }, { new: true })
        .exec()
        .then((user) => {
            if (!user) return res.status(userMessages.error.e0.http).send(userMessages.error.e0);
            let message = userMessages.success.s1;
            message.body = user;
            return res.status(message.http).send(message);
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
};

exports.delete = (req, res) => {
    User.deleteOne({ '_id': { $eq: req.params.id } })
        .exec()
        .then((user) => {
            if (user.deletedCount <= 0) return res.status(userMessages.error.e0.http).send(userMessages.error.e0);
            let message = userMessages.success.s4;
            return res.status(message.http).send(message);
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
};

exports.getone = (req, res) => {
    User.findOne({ '_id': { $eq: req.params.id } })
        .exec()
        .then((user) => {
            if (!user) return res.status(userMessages.error.e0.http).send(userMessages.error.e0);
            let message = userMessages.success.s5;
            const usr = {
                firstname: user.firstname,
                lastname: user.lastname,
                name: user.name,
                cartaocidadao: user.cartaocidadao,
                nif: user.nif,
                morada: user.morada,
                codigopostal: user.codigopostal,
                freguesia: user.freguesia,
                email: user.email,
                mobile: user.mobile,
                bdate: user.bdate,
                notifications: user.notifications,
            };
            message.body = usr;
            return res.status(message.http).send(message);
        })
        .catch((error) => {
            console.log(error);
            return res.status(500).send({ error: 'Internal Server Error' });
        });
};
