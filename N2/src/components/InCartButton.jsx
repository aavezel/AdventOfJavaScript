import React from 'react';
import PropTypes from 'prop-types';

export function InCartButton({ removeFromCart }) {
    return (
        <button className="in-cart" onClick={removeFromCart}>
            <img src="images/check.svg" alt="Check" />
            In Cart
        </button>
    );
}

InCartButton.propTypes = {
    removeFromCart: PropTypes.func.isRequired,
};

export default InCartButton;
