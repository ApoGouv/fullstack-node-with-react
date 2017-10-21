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
            <li key="menu-item-1">
              <i className="fa fa-sign-in" aria-hidden="true" /> Login With
            </li>,
            <li key="menu-item-2">
              <a href="/auth/google">
                <i className="fa fa-google" />
              </a>
            </li>,
            <li key="menu-item-3">
              <a href="/auth/facebook">
                <i className="fa fa-facebook" />
              </a>
            </li>
          ];
        default:
          return [
            <li key="menu-item-4">
              <Payments />
            </li>,
            <li key="menu-item-5" style={{ margin: '0 10px' }}>
              Credits: {this.props.auth.credits}
            </li>,
            <li key="menu-item-6">
              <a href="/api/logout">
                Logout <i className="fa fa-sign-out" aria-hidden="true" />
              </a>
            </li>
          ];
      }
  }

  render() {
    let gradientBG = {
      backgroundColor: `rgb(39, 45, 78)`,
      backgroundImage: `radial-gradient(circle farthest-side at right bottom, rgb(39, 45, 78) 34%, rgb(38, 166, 154) 100%)`
    };

    return (
      <nav>
        <div className="nav-wrapper" style={gradientBG}>
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
