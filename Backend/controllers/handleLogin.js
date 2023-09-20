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

const handleLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.login(email, password);
        const token = jwtToken(user._id);
        res.cookie("jwt", token, { httpOnly: false, maxAge: maxAge * 1000 });
        res.status(200).json({ user: user._id, status: true });
    } catch (err) {
        const errors = handleErrors(err);
        res.json({ errors, status: false });
    }
}

module.exports = handleLogin;