const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const nocache = require('nocache');
const app = express();
const port = 3000;

app.use(nocache());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Configure session
app.use(session({
    secret: 'secret-key', // Replace with a random secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // Session lasts for 1 day
}));

// Middleware to check if user is logged in
function logged(req, res, next) {
    if (req.session.loggedIn) {  // Check `loggedIn` instead of `isloggedIn`
        next();
    } else {
        res.redirect('/');
    }
}

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Mock user data (for demo purposes)
const validUsername = 'a';
const validPassword = '123';

// Routes

// Login page
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
    } else {
        res.render('login', { title: 'Welcome to EJS with Express!', error: null });
    }
});

// Login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === validUsername && password === validPassword) {
        // Set session variable
        req.session.loggedIn = true;  // Use `loggedIn`
        res.redirect('/home');
    } else {
        res.render('login', { error: 'Invalid username or password!' });
    }
});

// Dashboard (protected route)
app.get('/home', logged, (req, res) => {
    res.render('home');
});

// Logout
app.get('/logout', (req, res) => {
    // Destroy the session
    req.session.destroy(err => {
        if (err) {
            return res.redirect('/home');
        }
        res.redirect('/');
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
