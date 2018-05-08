import React, {Component} from 'react';

export function makeAwesome(WrappedComponent) {
    return class extends Component {
        render() {
            //Return the parameter with component syntax
           return <WrappedComponent isAwesome={true} {...this.props}/>
        }
    }
};

export function withTime(WrappedComponent) {
    return class extends Component {
        render() {
            return <WrappedComponent time="game time" {...this.props} />
        }
    }
}