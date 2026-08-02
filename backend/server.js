const express = require("express");
const db = require("./database/database");
const patientRoutes = require("./routes/patientRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to MedVault Backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});