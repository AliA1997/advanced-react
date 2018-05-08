import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
    render() {
        return (
            <button>{JSON.stringify(this.props.text)}</button>

        );
    }
}

MyButton.propTypes = {
    text: PropTypes.string,
    value: PropTypes.shape({
        a: Proptypes.number.isRequired,
        b: PropTypes.string.isRequired,
        c: PropTypes.arrayOf(PropTypes.number).isRequired
    })
}


MyButton.defaultProps = {
    text: 'Click Here'
}
