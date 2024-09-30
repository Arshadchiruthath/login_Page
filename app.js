const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const nocache = require('nocache');
const { log } = require('console');
const app = express();
const port = 4000;

app.use(nocache());

app.use((req, res, next) => {
    res.set('Cache-Control', 'no-store');
    next();
});

// const express = require('express');
// const app = express();

// Application-level middleware
// app.use((req, res, next) => {
//   console.log('Time:', Date.now());
//   next(); // Passes control to the next middleware
// });



// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'))

// Configure session

app.use(session({
    secret: 'secret-key', // Replace with a random secret key
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 } // Session lasts for 1 day
}));

const fs=require('fs')
fs.writeFile('./test.txt',new Date().toString(),()=>{  
})

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
const validUsername = 'ARSHAD';
const validPassword = 'A1';

// Routes

// Login page
app.get('/', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/home');
    }
    if(req.session.invalid){
        res.render('login', { error: 'Invalid username or password!' });
    }
    else{
        res.render('login')
    }
});

// Login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // console.log(req.body);
    

    if (username === validUsername && password === validPassword) {
        // Set session variable
        req.session.loggedIn = true;  // Use `loggedIn`
        req.session.username = username; 
        req.session.password = password; 
        res.redirect('/home');
    } else {
        req.session.invalid = true;
        res.redirect('/');
    }
});


// Dashboard (protected route)
app.get('/home', logged, (req, res) => {

    res.render('home', { username: req.session.username, password: req.session.password });
    // res.render('home');
    
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


