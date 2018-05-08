import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import Button from './Button';
import Switch from './Switch';
import MyComponent from './MyComponent';
import WithTime from './WithTime';
import WithData from './withData';
import { Tabs, TabPane } from './TabStuff';

class App extends Component {
  render() {
    return (
      <div >
        <MyButton value={{a: 'Ali', b: 'Alhaddad', c: [1231232]}}/>
        <Switch>
          {(toggle, isOn) => {
            return <div>
              <input type='checkbox' value={isOn} onClick={toggle} />
              The current value is {isOn ? 'true' : 'false'}
              </div>
          }}
        </Switch>
        <Button type='default'>Click Me</Button>
        <MyComponent />
        <WithTime>
        {time => (<div>
          Here is the time: {time}   
        </div>)}
        </WithTime>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Tab 1" key2="1">Content of Tab Pane 1</TabPane>
          <TabPane tab="Tab 2" key2="2">Content of Tab Pane 2</TabPane>
          <TabPane tab="Tab 3" key2="3">Content of Tab Pane 3</TabPane>
        </Tabs>
       </div>
    );
  }
}

export default App;
