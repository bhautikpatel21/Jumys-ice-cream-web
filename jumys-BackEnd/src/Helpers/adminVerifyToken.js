const jwt = require('jsonwebtoken');
const User = require('../Model/Login.Model');

exports.adminVerifyToken = async (req, res, next) => {
    try {
        const authorization = req.headers['authorization'];

        if (!authorization) {
            return res.status(401).json({ message: "Authorization header missing" });
        }

        const token = authorization.split(" ")[1];
        if (!token) {
            return res.status(401).json({ message: "Token missing from authorization header" });
        }

        const decoded = jwt.verify(token, 'Admin'); // Use the same secret key
        const adminId = decoded.adminId;
        
        if (!adminId) {
            return res.status(401).json({ message: "Invalid token payload" });
        }

        const admin = await User.findById(adminId);

        if (!admin) {
            return res.status(401).json({ message: "Admin not found" });
        }

        req.admin = admin; // Attach admin to the request
        next();

    } catch (error) {
        console.error("Error in adminVerifyToken:", error);
        return res.status(500).json({ message: "Internal Server Error in Token Verification" });
    }
};
