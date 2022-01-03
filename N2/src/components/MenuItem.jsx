import React from 'react';
import PropTypes from 'prop-types';
import MenuItemContent from './MenuItemContent';
import MenuItemPlate from './MenuItemPlate';

export const MenuItem = ({name,price,image,alt,count,addToCart,removeFromCart}) => (
    <>
        <MenuItemPlate image={image} alt={alt} />
        <MenuItemContent
            name={name}
            price={price}
            inCart={count > 0}
            addToCart={() => addToCart(name)}
            removeFromCart={() => removeFromCart(name)}
        />
    </>
);

MenuItem.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
};

export default MenuItem;
