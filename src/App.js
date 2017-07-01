import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ChatBox from './ChatBox.js';
// import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      submit: ''
    }
  }

  handleChange = val => {
    this.setState({
      input: val.target.value
    })
  };

  handleClick = () => {
    this.setState({
      submit: this.state.input
    })
  }

  render() {
    return (
      <div>
        <Header />
        <ChatBox passedVal={this.state.submit} />
        <input value={this.state.input} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Submit</button>
      </div>
    );
  }
}

export default App;
