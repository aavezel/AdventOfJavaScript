import React from 'react';
import PropTypes from 'prop-types';
import InCartButton from './InCartButton';
import AddToCartButton from './AddToCartButton';

export const MenuItemContent = ({ name, price, inCart, addToCart, removeFromCart }) => (
    <div className="content">
        <p className="menu-item">{name}</p>
        <p className="price">${price / 100}</p>
        {
            inCart
                ? <InCartButton removeFromCart={removeFromCart} />
                : <AddToCartButton addToCart={addToCart} />
        }
    </div>
);

MenuItemContent.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inCart: PropTypes.boolean,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default MenuItemContent;
