/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 13/10/2017
 */

/* By convention, this is our root file - kind of the start up file inside of our node project */
const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');

const keys = require('./config/keys');

require('./models/User'); // load user model
require('./services/passport'); // Passport config file

// connect to the MongoDB
// Use native promises
mongoose.Promise = global.Promise;
mongoose.connect(keys.mongo.dev.URI, { useMongoClient: true })
  .then(() =>  console.log('Connection to MongoDB successful.'))
  .catch((err) => console.error(err));

// generate a new express application
const app = express();

// application-level middleware for common functionality - will run before request processed by route handler
/**
 * with app.use(): we create a middleware.
 * Middlewares are small functions that can be used to modify incoming requests to our app
 * before they are sent off to route handlers
 */

/**
 * Middleware
 * Instruct our express server to use cookies
 * maxAge: 30 days * 24 hours * 60 minutes * 60 seconds * 1000 milliseconds === 30 days
 * keys: has a random string, which will be used to encrypt our cookie
 */
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieSecret]
  })
);

// Instruct Passport to use cookies
app.use(passport.initialize());
app.use(passport.session());

// authRoutes.js: return a function
require('./routes/authRoutes')(app);

/**
 * Here, express tell Node to listen for incoming traffic at a specific port
 */
// get the PORT from the environment variable 'PORT' if is defined. Else set PORT = 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server up at port ${PORT}`);
  if (PORT === 5000) {
    console.log('http://localhost:5000/');
  }
});
