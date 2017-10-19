/**
 * File    : Header.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 17/10/2017
 */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return [
          <li>
            <i className="fa fa-sign-in" aria-hidden="true" /> Login With
          </li>,
          <li>
            <a href="/auth/google">
              <i className="fa fa-google" />
            </a>
          </li>,
          <li>
            <a href="/auth/facebook">
              <i className="fa fa-facebook" />
            </a>
          </li>
        ];
      default:
        return [
          <li>
            <Payments />
          </li>,
          <li>
            <a href="/api/logout">
              Logout <i class="fa fa-sign-out" aria-hidden="true" />
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            FeedColla
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
