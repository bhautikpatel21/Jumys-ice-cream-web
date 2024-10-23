const jwt = require('jsonwebtoken');
const User = require('../Model/user.model');

exports.adminVerifyToken = async(req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (authorization === undefined) {
            return res.json({ message: `Invalid Authorization ${console.error()}`});
        }
        let token = authorization.split(" ")[1];
        console.log(token);
        if (token === undefined) {
            return res.status(401).json({ message: `Unauthorize ${console.error()}`})
        }else{
            let {adminId} = jwt.verify(token, 'Admin');
            let admin = await User.findById(adminId);
            if (admin) {
                req.admin = admin;
                next();
            } else {
                return res.status(401).json({ message: `Invalid Admin(token) ${console.error()}`})
            }
        }
    } catch (error) {
        console.log(error);
        res.json({ message: `Internal Servar Error From Admin Token`});
    }
}