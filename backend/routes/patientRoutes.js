const express = require("express");
const router = express.Router();

const { requireLogin } = require("../middleware/authMiddleware");
const patientController = require("../controllers/patientController");

router.post("/register", patientController.registerPatient);
router.post("/login", patientController.loginPatient);
router.get("/me", requireLogin, patientController.getCurrentPatient);

module.exports = router;