import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <div >
        <MyButton value={{a: 'Ali', b: 'Alhaddad', c: [1231232]}}/>
        <MyComponent />
       </div>
    );
  }
}

export default App;
