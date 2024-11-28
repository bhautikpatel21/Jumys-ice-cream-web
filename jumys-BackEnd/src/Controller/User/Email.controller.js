// controllers/emailController.js
const { sendEmail } = require("../../Services/Email.service");

exports.sendEmailController = async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    const response = await sendEmail({ name, email, phone, message });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error: error.message });
  }
};
