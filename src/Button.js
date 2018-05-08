import React, { Component } from 'react';
import PropTypes from 'prop-types';



export default class Button extends Component {
    constructor() {
        super();
        this.state = {
            mouseOn: false,
        }
    }
    render() {
        const { type } = this.props;
        const { mouseOn } = this.state;
        function getStyle() {
            if(mouseOn) {
                switch(type) {
                    case 'danger':
                    return {
                        background: 'red',
                        color: 'gray',
                        width: '150px',
                        height: '50ps'
                    }
                    case 'default':
                    return {
                        background: 'transparent',
                        color: 'blue',
                        width: '150px',
                        height: '50px'
                    }
                    case 'primary':
                    return {
                        background: 'white',
                        color: '#216bff',
                        width: '150px',
                        height: '50px'
                    }
                }
            } else  {
                switch(type) {
                    case 'danger':
                    return {
                        color: 'red',
                        background: 'grey',
                        width: '150px',
                        height: '50px'                
                    }
                    case 'default':
                    return {
                        color: 'grey',
                        background: 'transparent',
                        width: '150px',
                        height: '50px'  
                    }
                    case 'primary':
                    return {
                        color: 'white',
                        background: '#216bff',
                        width: '150px',
                        height: '50px'  
                    }
                }
            }
        }
        return (
            <button onMouseOver={() => this.setState({mouseOn: true})} onMouseLeave={() => this.setState({mouseOn: false})} style={getStyle()}>{this.props.children}</button>
        );
    }
}

//PropTypes.oneOf([]) get enum of values.
Button.propTypes = {
    type: PropTypes.oneOf([ 'danger', 'dashed', 'primary', 'default'])
}