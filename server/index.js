/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 13/10/2017
 */

/* By convention, this is our root file - kind of the start up file inside of our node project */
const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/User'); // load user model
require('./services/passport'); // Passport config file


// connect to the MongoDB
mongoose.connect(keys.mongoURI);

// generate a new express application
const app = express();

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
