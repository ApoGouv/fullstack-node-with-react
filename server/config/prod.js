/**
 * File    : prod.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 16/10/2017
 */

// prod.js - production keys here!
module.exports = {
  google: {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURI: process.env.GOOGLE_CALLBACK_URI
  },
  facebook: {
    appID: process.env.FACEBOOK_APP_ID,
    appSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURI: process.env.FACEBOOK_CALLBACK_URI
  },
  mongo: {
    URI: process.env.MONGO_URI
  },
  stripe: {
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
    secretKey: process.env.STRIPE_SECRET_KEY
  },
  sendGridKey: process.env.SEND_GRID_KEY,
  redirectDomain: process.env.REDIRECT_DOMAIN,
  cookieSecret: process.env.COOKIE_SECRET
};