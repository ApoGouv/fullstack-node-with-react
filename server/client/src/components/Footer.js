/**
 * File    : Footer.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 17/10/2017
 */
import React, {Component} from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
  copyrightTillNow(year, copyrightText) {
    let yearNow = new Date().getFullYear();
    if (year >= yearNow) {
      return `© ${year}, ${copyrightText}`;
    } else {
      return `© ${year} - ${yearNow}, ${copyrightText}`;
    }
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">FeedColla</h5>
                <p className="grey-text text-lighten-4">
                  Get all the feedback you need in one place!
                </p>
              </div>
              <div className="col l4 offset-l2 s12">
                <h5 className="white-text">Links</h5>
                <ul>
                  <li>
                    <a className="grey-text text-lighten-3" href="#!">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      default:
        return (
          <div className="container">
            <div className="row">
              <div className="col l12 s12">
                <h5 className="white-text">FeedColla</h5>
              </div>
            </div>
          </div>
        );
    }
  }

  render() {
    return (
      <footer className="page-footer">
        {this.renderContent()}
        <div className="footer-copyright">
          <div className="container">
            <div className="row z-depth-2">
              <div className="col s12">
                {this.copyrightTillNow(2016, 'Apostolos Gouvalas')}
                <a className="grey-text text-lighten-4 right" href="https://cubedesigns.gr">CubeDesigns</a>
              </div>
            </div>
            </div>
        </div>
      </footer>
    );
  }
}

function mapStateToProps({auth}){
  return { auth };
}

export default connect(mapStateToProps)(Footer);
