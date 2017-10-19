/**
 * File    : billingRoutes.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 19/10/2017
 */
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripe.secretKey);
const requireLogin = require('../middlewares/requireLogin');

module.exports = app => {
  app.post('/api/stripe', requireLogin, async (req, res) => {
    // make the actual charge on the credit card
    const charge = await stripe.charges.create({
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: req.body.id
    });

    // the charge was completed, so add some credits to the user
    req.user.credits += 5;
    // save the new state of the user
    const user = await req.user.save();
    // send back the user
    res.send(user);
  });
};