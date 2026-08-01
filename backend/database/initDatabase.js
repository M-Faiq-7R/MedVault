const db = require("./database");

const createPatientsTable = `
CREATE TABLE IF NOT EXISTS patients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    phone TEXT,
    gender TEXT CHECK(gender IN ('Male', 'Female', 'Other')),
    dateOfBirth TEXT,
    createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;

db.run(createPatientsTable, (err) => {
    if (err) {
        console.error("Error creating patients table:", err.message);
    } else {
        console.log("Patients table is ready.");
    }
});