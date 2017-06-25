import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import ChatBox from './ChatBox.js';
import Input from './Input.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fieldVal: ""
    }
  }

  onUpdate = (val) => {
    this.setState({
      fieldVal: val
    })
  };
  render() {
    return (
      <div>
        <Header />
        <ChatBox passedVal={this.state.fieldVal}/>
        <Input onUpdate={this.onUpdate} />
      </div>
    );
  }
}

export default App;
