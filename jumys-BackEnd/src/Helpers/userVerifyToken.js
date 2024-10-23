const jwt = require('jsonwebtoken');
const User = require('../Model/user.model');

exports.userVerifyToken = async(req, res, next) => {
    try {
       const authorization = req.headers['authorization'];
       if(authorization === undefined){
             return res.json({ message: `Invalid Authorization ${console.error()}`});
       }
       let token = authorization.split(" ")[1];
       if (token === undefined) {
           return res.status(401).json({ message: `Unauthorize ${console.error()}`})
       }else{
            let {userId} = jwt.verify(token, 'User');
            let user = await User.findById(userId);
            if (user) {
                req.user = user;
                next();
            }else{
                return res.status(401).json({ message: `Invalid User(token) ${console.error()}`});
            }
       } 
    } catch (error) {
        console.log(error);
        res.json({ message: `Internal Server Error From User Token ${console.error()}`});
    }
}