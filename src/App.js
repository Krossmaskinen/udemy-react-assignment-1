import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Udemy React - Assignment 1</h1>
        <UserOutput username="krossmaskinen"/>
        <UserOutput username="quantumblaster"/>
        <UserOutput username="gucka87"/>
      </div>
    );
  }
}

export default App;