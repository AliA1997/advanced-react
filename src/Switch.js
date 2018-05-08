import React, { Component } from 'react';

export default class SwitchComponent extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false,
        }
    }

    render() {
        const { clicked } = this.state;
        function getStyle() {
            if(clicked) {
                return {
                    background: '#216bff',
                    borderRadius: '30%',
                    textAlign: 'right',
                    width: '5em',
                    height: '2em'
                }
            } else {
                return {
                    background: 'lightgrey',
                    borderRadius: '30%',
                    textAlign: 'left',
                    width: '5em',
                    height: '2em'                    
                }
            }
        }
        function getButtonStyle() {
                return {
                    background: 'white',
                    borderRadius: '100%',
                    height:'100%',
                    width: '2em'
                }
        }
        return (
            <div style={getStyle()}>
                <button onClick={() => this.setState({clicked: !this.state.clicked})} style={getButtonStyle()}>{this.props.children}</button>
            </div>
        );
    }
}
