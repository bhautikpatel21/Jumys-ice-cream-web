const UserServices = require('../../Services/Login.service');
const userService = new UserServices();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.registerAdmin = async(req, res) => {
    try {
        let admin = await userService.getUser({ email : req.body.email });
        console.log(admin);
        if(admin){
            return res.status(400).json({ message: `Admin is Already Registerd...`});
        }
        let hashPassword = await bcrypt.hash(req.body.password, 10);
        console.log(hashPassword);
        admin = await userService.addNewUser({
            ...req.body,
            password: hashPassword,
            isAdmin: true
        });
        res.status(201).json({admin: admin, message: `New Admin Is Added SuccesFully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});
    } 
};

exports.loginAdmin = async(req, res) => {
    try {
        let admin = await userService.getUser({email: req.body.email, isDelete: false});
        console.log(admin);
        if (!admin) {
            return res.status(404).json({message:`Email Not Found....`});
        }
        let checkPassword = await bcrypt.compare(req.body.password, admin.password);
        if (!checkPassword) {
            return res.status(401).json({message: `Password is Not Match...`});
        }
        let token = jwt.sign({ adminId: admin._id}, 'Admin');
        console.log(token);
        res.status(200).json({ token, message: `Admin Login SuccesFully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..`});
    }
};

exports.getAllUsers = async(req, res) => {
    try {
        let admin = await userService.getAllUsers({isDelete: false});
        console.log(admin);
        if(!admin){
            return res.status(404).json({ message: `Admin Data Not Found...!`});
        }
        res.status(200).json(admin);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});
    }
};

exports.getUser = async (req, res) => {
    try {
        const adminId = req.query.adminId || req.admin._id;
        if (!adminId) {
            return res.status(400).json({ message: "Admin ID is required" });
        }

        const admin = await userService.getUserById(adminId); 
        if (!admin) {
            return res.status(404).json({ message: "Admin not found" });
        }

        res.status(200).json(admin);

    } catch (error) {
        console.error("Error in getUser:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

exports.updateUser = async (req, res) => {
    try {
        const adminId = req.admin._id;

        let admin = await userService.getUserById(adminId);

        if (!admin) {
            return res.status(404).json({ message: `Admin not found` });
        }

        admin = await userService.updateUser(adminId, { ...req.body });

        res.status(200).json({ admin, message: `Admin update successfully...........` });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Interanal server error` });
    }
    
}

exports.deleteUser = async(req, res) => {
    try {
        let user = await userService.getUserById(req.query.userId);
        if (!user) {
            return res.status(404).json({message:"user not found..."});
        }
        user = await userService.updateUser(user._id, {isDelete: true});
        res.status(200).json({user,message: `Admin Deleted Succesfully...`});
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Internal Server Error..${console.error()}`});
    }
};

exports.logOut = async (req, res) => {
    try {
        let token = req.headers[`authorization`];

        if (!token) {
            return re.status(404).json({ message: `User alreay logouted` });
        }
        
        await userService.logoutUser(token);
        res.status(200).json({ message: `Logged out successfully` });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Interanal server error.......${console.error()}` });
    }
};

exports.updatePassword = async (req, res) => {
    try {
      const { adminId } = req.query;
      const { oldPassword, newPassword, confirmPassword } = req.body;
  
      const admin = await userService.getUserById(adminId);
      if (!admin) {
        return res.status(404).json({ message: "User not found" });
      }
  
      const isMatch = await bcrypt.compare(oldPassword, admin.password);
      if (!isMatch) {
        return res.status(400).json({ message: "Incorrect old password" });
      }
  
      if (newPassword !== confirmPassword) {
        return res.status(400).json({ message: "New passwords do not match" });
      }
  
      const hashedPassword = await bcrypt.hash(newPassword, 10);
      admin.password = hashedPassword;
      await admin.save();
  
      res.status(200).json({ message: "Password updated successfully" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
  }
  