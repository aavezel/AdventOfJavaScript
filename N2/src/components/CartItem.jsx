import React from 'react';
import PropTypes from 'prop-types';

export const CartItem = ({ name, price, image, alt, count, increaseCount, decreaseCount }) => (
    <>
        <div className="plate">
            <img src={`images/${image}`} alt={alt} className="plate" />
            <div className="quantity">{count}</div>
        </div>
        <div className="content">
            <p className="menu-item">{name}</p>
            <p className="price">${price / 100}</p>
        </div>
        <div className="quantity__wrapper">
            <button className="decrease" onClick={decreaseCount}>
                <img src="images/chevron.svg" />
            </button>
            <div className="quantity">{count}</div>
            <button className="increase" onClick={increaseCount}>
                <img src="images/chevron.svg" />
            </button>
        </div>
        <div className="subtotal">${count * price / 100}</div>
    </>
);

CartItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    increaseCount: PropTypes.func.isRequired,
    decreaseCount: PropTypes.func.isRequired,
};

export default CartItem;
