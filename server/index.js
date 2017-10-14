/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 13/10/2017
 */

/* By convention, this is our root file - kind of the start up file inside of our node project */

const express = require('express');

// generate a new express application
const app = express();

/**
 * app: Express App to register this route handler with
 * get: Watch for incoming HTTP requests with this method
 * '/': Watch for requests trying to access '/' - the root route
 * @req: Object representing the incoming request
 * @res: Object representing the outgoing response
 */
app.get('/', (req, res) => {
  // Immediately send some JSON back to who ever made this request
  res.send({ bye: 'buddy' });
});


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
