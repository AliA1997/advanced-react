import React, { Component } from 'react';

export function makeAwesome(WrappedComponent) {
  return class extends Component {
    render() {
      console.log('Props of makeAwesome', this.props)
      return <WrappedComponent isAwesome={true}/>
    }
  }
};

export function withTime(WrappedComponent) {
  return class extends Component {
    render() {
      console.log('Props of withTime', this.props)
      return <WrappedComponent time="game time" />
    }
  }
};
