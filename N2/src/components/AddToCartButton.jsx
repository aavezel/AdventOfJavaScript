import React from 'react';
import PropTypes from 'prop-types';

const AddToCartButton = ({addToCart}) => (
    <button className="add" onClick={addToCart}>
        Add to Cart
    </button>
);

AddToCartButton.propTypes = {addToCart: PropTypes.func.isRequired};

export default AddToCartButton;