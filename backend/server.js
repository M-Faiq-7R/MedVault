const path = require("path");
const express = require("express");
const session = require("express-session");
const db = require("./database/database");
const patientRoutes = require("./routes/patientRoutes");


const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Session middleware
app.use(
    session({
        secret: "medvault-secret-key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            sameSite: "lax",
            maxAge: 1000 * 60 * 60
        }
    })
);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, "../frontend")));

// Routes
app.use("/api/patients", patientRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to MedVault Backend!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});