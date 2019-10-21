import React, { Component } from 'react';
import {Jumbotron}from 'react-bootstrap';
class About extends Component {
  render() {
    return (
          <Jumbotron>
            <h1>Hello, world!</h1>
            <h2>
              This is a simple CRUD APP built using MERN Stack.
            </h2>
            <h3>Technologies Used:</h3>
            <ul>
              <li>React.js</li>
                <ul>
                  <li>React-Router v4</li>
                  <li>Axios</li>
                </ul>
              <li>Redux</li>
              <ul>
                  <li>Redux Middleware - Redux Thunk</li>
                </ul>
                <li>React Bootstrap</li>
              <li>Mongo DB</li>
              <li>Express.js</li>
              <li>Node.js</li>
              
            </ul>
          </Jumbotron>
    );
  }
}

export default About;