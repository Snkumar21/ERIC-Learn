require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require("body-parser");
const path = require("path");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3005;

// Enable CORS
app.use(cors());

// Body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Serve static files (only if needed)
app.use(express.static(path.join(__dirname, "public")));

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "Snkumar30",
    database: process.env.DB_NAME || "eric_db",
});

db.connect(err => {
    if (err) {
        console.error('❌ Error connecting to MySQL:', err);
    } else {
        console.log('✅ Connected to MySQL Database');
    }
});

// Register
app.post('/registerform', (req, res) => {
    const { username, email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) return res.status(500).json({ success: false, message: 'Error checking user' });
        if (result.length > 0) return res.status(400).json({ success: false, message: 'User already exists' });

        bcrypt.hash(password, 10, (err, hash) => {
            if (err) return res.status(500).json({ success: false, message: 'Error hashing password' });

            db.query('INSERT INTO users (username, email, password1) VALUES (?, ?, ?)',
                [username, email, hash], (err) => {
                    if (err) return res.status(500).json({ success: false, message: 'Error registering user' });
                    res.status(201).json({ success: true, message: 'User registered successfully' });
                });
        });
    });
});

// Login
app.post('/loginform', (req, res) => {
    const { email, password } = req.body;

    db.query('SELECT * FROM users WHERE email = ?', [email], (err, result) => {
        if (err) return res.status(500).send({ success: false, message: 'Error logging in' });
        if (result.length === 0) return res.status(400).send({ success: false, message: 'User not found' });

        const user = result[0];
        bcrypt.compare(password, user.password1, (err, isMatch) => {
            if (err) return res.status(500).send({ success: false, message: 'Error checking password' });
            if (!isMatch) return res.status(400).send({ success: false, message: 'Invalid password' });

            const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET || 'secret', { expiresIn: '1h' });
            res.status(200).send({ success: true, message: 'Login successful', token });
        });
    });
});

// Contact
app.post("/contact", (req, res) => {
    const { name, email, message } = req.body;
    db.query("INSERT INTO contact1 (uname, email, message) VALUES (?, ?, ?)",
        [name, email, message], (err) => {
            if (err) return res.status(500).json({ success: false, message: 'Error submitting message' });
            res.status(200).json({ success: true, message: 'Message submitted successfully' });
        });
});

// Static routes (optional for development)
app.get("/index", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "login.html"));
});
app.get("/service", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "service.html"));
});
app.get("/register", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "signup.html"));
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});