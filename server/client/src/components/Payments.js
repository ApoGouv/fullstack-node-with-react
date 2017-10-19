/**
 * File    : Payments.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 19/10/2017
 */
import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout'

/**
 * StripeCheckout Properties/Options
 * amount: # of US cents, e.g. 500 = 5 US dollars
 * token: the token we receive from Stripe
 * stripeKey:the Publishable Stripe API key
 */
class Payments extends Component {
  render() {

    return (
      <StripeCheckout
        amount={500}
        token={token => console.log(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      />
    );
  }
}

export default Payments;