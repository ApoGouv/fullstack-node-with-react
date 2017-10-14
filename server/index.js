/**
 * File    : index.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 13/10/2017
 */

/* By convention, this is our root file - kind of the start up file inside of our node project */
const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const keys = require('./config/keys');

// generate a new express application
const app = express();

/**
 * passport.use(): is like a generic register
 *                 we use it to tell/inform passport to use a new Strategy
 * new GoogleStrategy(): create a new GoogleStrategy instance
 * clientID and clientSecret: are our credentials from google to OAuth client
 * callbackURL: is the route path, the user will be sent to, after they grant permissions to our application
 */
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      // accessToken: proves that we can read/or make changes to a users Google profile
      console.log('Access token:', accessToken);
      // refreshToken: let us to automatically refresh the accessToken, which by default expires after some time
      console.log('Refresh token:', refreshToken);
      // profile: an object, containing the users profile information
      console.log('Profile:', profile);
    }
  )
);

/**
 * When a user comes to the http://localhost:5000/auth/google
 * we want to kick them into our OAuth flow which is being entirely managed by passport.
 * So we are saying: Hey passport, attempt to authenticate the user who is coming to this
 * route and use the strategy called 'google'.
 * The second argument we pass is an object, with a 'scope' property.
 * scope: specifies to google what access we want to have inside of this user's profile.
 */
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

/**
 * We have the 'code'. so call passport with 'google' strategy to
 * handle the last request exchange with google servers
 */
app.get('/auth/google/callback', passport.authenticate('google'));

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
