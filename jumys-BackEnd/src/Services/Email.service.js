const nodemailer = require("nodemailer");

exports.sendEmail = async ({ name, email, phone, message }) => {
  try {
    // Configure Nodemailer
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "your-email@gmail.com", // Replace with your email
        pass: "your-email-password", // Replace with your app password
      },
    });

    // Compose the email
    const mailOptions = {
      from: email,
      to: "bdudhat293@gmail.com", // Replace with the recipient email
      subject: `New Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Email sending failed:", error);
    throw new Error("Failed to send email");
  }
};
