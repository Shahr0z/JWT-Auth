const UserModel = require('../models');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const handleErrors = require('../errors');

dotenv.config();

const maxAge = 3 * 24 * 60 * 60; // 3 days 

const jwtToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
}

const handleRegister = async (req, res,) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.create({ email, password });
        const token = jwtToken(user._id);

        res.cookie('jwt', token, {
            withCredentials: true,
            httpOnly: false,
            maxAge: maxAge * 1000
        });

        res.status(200).json({ user: user._id, created: true });

    } catch (error) {
        console.log(error);
        const errors = handleErrors(err);
        res.status(400).json({ errors, created: false });
    }
}

module.exports = handleRegister;