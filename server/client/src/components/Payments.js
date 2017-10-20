/**
 * File    : Payments.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 19/10/2017
 */
import React, {Component} from 'react';
import StripeCheckout from 'react-stripe-checkout';
import {connect} from 'react-redux';
import * as actions from '../actions';

/**
 * StripeCheckout Properties/Options
 * name: Like title that appears in the payment form popup
 * description: appears below name in the payment form popup
 * amount: # of US cents, e.g. 500 = 5 US dollars
 * token: the token we receive from Stripe
 * stripeKey:the Publishable Stripe API key
 */
class Payments extends Component {
  render() {
    console.log('*****************', process.env, '*****************');
    return (
      <StripeCheckout
        name="FeedColla"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.handleToken(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn">
          Add Credits
        </button>
      </StripeCheckout>
    );
  }
}

export default connect(null, actions)(Payments);