import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';

class App extends Component {
  render() {
    return (
      <div >
        <MyButton value={{a: 'Ali', b: 'Alhaddad', c: [1231232]}}/>
      </div>
    );
  }
}

export default App;
