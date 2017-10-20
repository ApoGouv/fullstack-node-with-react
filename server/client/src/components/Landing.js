/**
 * File    : Landing.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 18/10/2017
 */
import React from 'react';
import Particles from 'react-particles-js';
import {particlesJsConfig} from './../config/particlesjs-config';


function Landing() {
  return (
    <div>
      <section id="splash-blue"
               style={{
                 backgroundColor: '#272D4E',
                 backgroundImage: 'radial-gradient(circle farthest-side at right bottom,rgba(39, 45, 78, 1) 34%,rgb(38, 166, 154) 100%)',
                 position: 'relative',
                 paddingTop: '70px',
                 paddingBottom: '160px'
               }}
               className="z-depth-1" >
        <div id="particles-js"
              style={{
                top: '0',
                position: 'absolute',
                width: '100%',
                height: '100%'
              }}>
          <Particles
            height="400px"
            params={particlesJsConfig}
            style={{
              width: '100%',
              height: '400px'
            }}
          />
        </div>
        <div className="container">
          <div className="row hide-on-small-only hero-home">
            <div className="col m10 offset-m1 s12 l10 offset-l1">
              <h1 className="white-text main-title center-align">FeedColla!</h1>
              <h5 className="white-text sub-title center-align">Collect feedback from your users</h5>
            </div>
          </div>
          <div className="row hide-on-med-and-up center-align">
            <div className="col s12">
              <h1 className="white-text main-title center-align">FeedColla!</h1>
              <h5 className="white-text center-align">Collect feedback from<br />your<br />users</h5>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;