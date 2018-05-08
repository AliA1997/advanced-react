import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
    render() {
        return (
            <button>{JSON.stringify(this.props.text)}</button>

        );
    }
}

// s


MyButton.defaultProps = {
    text: 'Click Here'
}
