const db = require("../database/database");

/*
 * Inserts a new patient into the database.
 */
function createPatient(
    fullName,
    email,
    password,
    phone,
    cnic,
    gender,
    dateOfBirth,
    callback
) {

    const sql = `
        INSERT INTO patients (fullName, email, password, phone, cnic, gender, dateOfBirth)
        VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.run(sql, [fullName, email, password, phone, cnic, gender, dateOfBirth], function (err) {

        if (err) {
            return callback(err);
        }

        callback(null, this.lastID);

    });

}

function getPatientByEmail(email) {

    return new Promise((resolve, reject) => {

        const query = `
            SELECT *
            FROM patients
            WHERE email = ?
        `;

        db.get(query, [email], (error, row) => {

            if (error) {
                reject(error);
            } else {
                resolve(row);
            }

        });

    });

}

module.exports = {
    createPatient,
    getPatientByEmail
};