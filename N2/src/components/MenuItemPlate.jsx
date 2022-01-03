import React from 'react';
import PropTypes from 'prop-types';

export const MenuItemPlate = ({ image, alt }) => (
    <div className="plate">
        <img src={`images/${image}`} alt={alt} className="plate" />
    </div>
);

MenuItemPlate.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
};

export default MenuItemPlate;
