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

async function loginPatient(req, res) {

    try {

        const { email, password } = req.body;

        const patient = await patientModel.getPatientByEmail(email);

        if (!patient) {
            return res.status(404).json({
                message: "Patient not found."
            });
        }

        const passwordMatch = await bcrypt.compare(password, patient.password);

        if (!passwordMatch) {
            return res.status(401).json({
                message: "Invalid password."
            });
        }

        res.status(200).json({
            message: "Login successful.",
            patient: {
                id: patient.id,
                fullName: patient.fullName,
                email: patient.email
            }
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            message: "Internal server error."
        });

    }

}
    



module.exports = {
    registerPatient,
    loginPatient
};