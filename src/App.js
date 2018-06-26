import React, { Component } from 'react';
import './App.css';
import UserInput from './User/UserInput';
import UserOutput from './User/UserOutput';

class App extends Component {
  state = {
    name : 'Andrew'
  }

  changeNameHandler = (event) =>
  {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    return (
      <div className="App">
        <UserOutput name={this.state.name} />
        <UserInput name={this.state.name} changeName={this.changeNameHandler} />
      </div>
    )
  }
}

export default App;
