import React, { Component } from 'react';
import PropTypes from 'prop-types';


class MyComponent extends Component {
    render() {
        const {name, children, favoriteNumber} =this.props;
        return (
            <div>
                hi. my name is {name}.<br/>
                The value of children is {children}.<br/>
                My favorit number is {favoriteNumber}.
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: 'Shin'
};

MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};

export default MyComponent;