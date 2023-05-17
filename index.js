// require express
const express = require('express'); 
const port = 8000;
const app = express(); 
const expressLayout = require('express-ejs-layouts');

// requiring mongoDB
const db = require('./config/mongoose');

const bodyParser = require('body-parser');

// Creating or handling session
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');

// requiring mongo-store, this store user.
const MongoStore = require('connect-mongo');

// this is for flash middleware to show the notifications on webpage
const flash = require('connect-flash'); 
const flashMiddleWare = require('./config/flashMiddleware');

// middleware for changing into the string which comes from req.body
app.use(bodyParser.urlencoded({extended:false}));
// For using the file in assets folder.
app.use(express.static('./assets'));

// Setting up the view engine
app.set('view engine','ejs');
app.set('views','./views');

app.use(expressLayout);

//mongo store is used to store session cookies into browser
app.use(session({
    name: "ERS",
    secret: "nikkey",
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create({
        mongoUrl: 'mongodb+srv://hellonikhil570:nikk007@cluster0.t0rjj3x.mongodb.net/ers',
        autoRemove: 'disabled'
    },
        (err) => {
            console.log(err || 'connect-mongo setup ok');
        }
    )
}))

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use(flash());
app.use(flashMiddleWare.setFlash);

// setting up the router, following MVC structure.
app.use('/' , require('./routes/index'));


// Setting up the server at the given port
app.listen(port, function(err){
    if(err){
        console.log("Error in running the app.");
        return ;
    }
    console.log("Server is up and running at port ", + port);
});