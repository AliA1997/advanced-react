import React, { Component } from 'react';


function SomeComponent(props) {
    return (
        <div>Some Cmoponent</div>
    )
}


export default class WithTime extends Component {
    render() {
        return (
            <div>
            <h1>With time</h1>
             {this.props.children('game time')}
             </div>
        );
    }
}