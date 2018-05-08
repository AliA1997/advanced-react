import React, { Component } from 'react';
import { makeAwesome, withTime } from './hocs/hocs';

function fakeAxios(url) {
    return new Promise(resolve => {
        setTimeout()
    })
}


class  MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            data: null,
        }
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <h2>Is this component is awesome? {this.props.isAwesome ? 'You know it' : 'false' }</h2>
                <div>What time is it: {this.props.time}</div>
                <div>
                    Here are all my props: {JSON.stringify(this.props, null, 2)}
                </div>
                <div>
                </div>
            </div>
        );
    }
}

export default withTime(MyComponent);