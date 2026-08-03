# 🏥 MedVault

**MedVault** is a secure hospital data management system designed to simplify patient record management while emphasizing security, scalability, and maintainability. The project follows the MVC (Model-View-Controller) architecture and is being developed as a full-stack web application using modern web technologies.

> **Status:** 🚧 In Active Development

---

## ✨ Features

### Current Features

* Patient Registration System
* Secure password hashing using **bcrypt**
* SQLite database integration
* Express.js REST API
* MVC architecture
* Duplicate email detection
* Duplicate CNIC detection
* Browser-to-backend communication using Fetch API
* SweetAlert2 notifications
* Form validation
* Prevention of duplicate form submissions

### Planned Features

* Patient Login & Authentication
* JWT-based Authorization
* Protected Patient Dashboard
* Medical Record Management
* File Uploads
* Doctor Portal
* Admin Dashboard
* Appointment Scheduling
* Role-Based Access Control
* Encryption for Sensitive Medical Data
* Audit Logs

---

## 🛠 Tech Stack

### Frontend

* HTML5
* CSS3
* Bootstrap 5
* JavaScript (ES6+)
* SweetAlert2

### Backend

* Node.js
* Express.js

### Database

* SQLite3

### Security

* bcrypt

### Version Control

* Git
* GitHub

---

## 📁 Project Structure

```text
MedVault/
│
├── backend/
│   ├── controllers/
│   ├── database/
│   ├── models/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── assets/
│   ├── css/
│   ├── html/
│   └── js/
│
└── README.md
```

---

## 🚀 Current Workflow

```text
Patient Registration
        │
        ▼
Frontend Form
        │
        ▼
Fetch API
        │
        ▼
Express Route
        │
        ▼
Controller
        │
        ▼
Password Hashing
        │
        ▼
Model
        │
        ▼
SQLite Database
        │
        ▼
JSON Response
        │
        ▼
Frontend Notification
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/M-Faiq-7R/MedVault.git
```

Move into the project:

```bash
cd MedVault
```

Install backend dependencies:

```bash
cd backend
npm install
```

Start the development server:

```bash
node server.js
```

Open your browser:

```
http://localhost:3000
```

---

## 📌 Project Goals

This project aims to:

* Learn full-stack web development
* Build secure authentication systems
* Apply software engineering principles
* Develop scalable backend architecture
* Practice secure handling of sensitive healthcare information

---

## 🗺 Roadmap

* [x] Project setup
* [x] MVC architecture
* [x] SQLite integration
* [x] Patient registration API
* [x] Password hashing
* [x] Frontend-backend integration
* [ ] Patient login
* [ ] JWT authentication
* [ ] Protected dashboard
* [ ] Medical record CRUD
* [ ] Doctor portal
* [ ] Admin panel
* [ ] File uploads
* [ ] Encryption layer
* [ ] Deployment

---

## 👨‍💻 Author

**Muhammad Faiq**

GitHub: https://github.com/M-Faiq-7R

---

> **Note:** MedVault is an educational portfolio project under active development. Features and architecture will continue to evolve as the project grows.
