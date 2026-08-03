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

module.exports = {
    createPatient
};