/**
 * File    : Dashboard.js
 * Project : fullstack-node-with-react
 * Author  : Apostolos Gouvalas
 * Date    : 20/10/2017
 */
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';


function Dashboard() {
  return (
    <div className="white-text" style={{padding: "35px 0px"}}>
      <SurveyList />
      <div className="fixed-action-btn">
        <Link to="/surveys/new" className="btn-floating btn-large red">
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;