import React, { Component } from 'react';
import { makeAwesome, withTime } from './hocs/hocs';

class  MyComponent extends Component {
    render() {
        return (
            <div>
                <h2>Is this component is awesome? {this.props.isAwesome ? 'You know it' : 'false' }</h2>
                <div>What time is it: {this.props.time}</div>
                <div>
                    Here are all my props: {JSON.stringify(this.props, null, 2)}
                </div>
            </div>
        );
    }
}

export default makeAwesome(withTime(MyComponent));