/**
 * File    : Dashboard.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 20/10/2017
 */
import React from 'react';
import { Link } from 'react-router-dom';


function Dashboard() {
  return (
    <div className="white-text" style={{position:"relative",padding: "35px 0px 100px 0px"}}>
      Dashboard
      <div className="fixed-action-btn" style={{position: "absolute"}}>
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;