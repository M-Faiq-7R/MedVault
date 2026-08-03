const bcrypt = require("bcrypt");
const patientModel = require("../models/patientModel");

async function registerPatient(req, res) {

    try {

        const {
            fullName,
            email,
            password,
            phone,
            cnic,
            gender,
            dateOfBirth
        } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10);

        patientModel.createPatient(
            fullName,
            email,
            hashedPassword,
            phone,
            cnic,
            gender,
            dateOfBirth,
            (err, patientId) => {

                if (err) {

                    if (err.message.includes("patients.email")) {
                        return res.status(409).json({
                            message: "Email already exists."
                        });
                    }

                    if (err.message.includes("patients.cnic")) {
                        return res.status(409).json({
                            message: "CNIC already exists."
                        });
                    }

                    return res.status(500).json({
                        message: "Registration failed."
                    });

                }

                res.status(201).json({
                    message: "Patient registered successfully.",
                    patientId
                });

            }
        );

    }catch (error) {
    console.error(error);

    res.status(500).json({
        message: error.message
    });
}

    

}

module.exports = {
    registerPatient
};