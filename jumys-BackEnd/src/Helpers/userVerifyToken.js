const jwt = require('jsonwebtoken');
const User = require('../Model/Login.Model');

exports.userVerifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];
        if (!authorization) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const token = authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing from authorization header" });
        }

        const { userId } = jwt.verify(token, 'User'); 
        const user = await User.findById(userId);

        if (!user) {
            return res.status(401).json({ message: "Invalid User token" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.error("Token verification error:", error);
        res.status(500).json({ message: "Internal Server Error during token verification" });
    }
};
