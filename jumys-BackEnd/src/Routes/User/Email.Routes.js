// routes/emailRoutes.js
const express = require("express");
const { sendEmailController } = require("../../Controller/User/Email.controller");

const router = express.Router();

// POST /api/email
router.post("/sendm", sendEmailController);

module.exports = router;
