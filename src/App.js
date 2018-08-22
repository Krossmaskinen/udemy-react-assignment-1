import React, { Component } from 'react';
import './App.css';
import './UserInput/UserInput.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    username: 'krossmaskinen'
  };

  changeUsernameHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <h1>Udemy React - Assignment 1</h1>
        <UserInput input={this.changeUsernameHandler} username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
        <UserOutput username={this.state.username}/>
      </div>
    );
  }
}

export default App;