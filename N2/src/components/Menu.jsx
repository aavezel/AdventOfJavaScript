import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import MenuItem from './MenuItem';

export const Menu = ({ store }) => {
    const addToCart = (name) => () => store.increaseCount(name);
    const removeFromCart = (name) => () => store.removeFromCart(name);

    return (
        <div className="panel">
            <h1>To Go Menu</h1>
            <ul className="menu">
                {store.list.map(({name,price,image,alt,count}) => (
                    <li key={name}>
                        <MenuItem
                            alt={alt}
                            count={count}
                            image={image}
                            name={name}
                            price={price}
                            addToCart={addToCart(name)}
                            removeFromCart={removeFromCart(name)}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );};

Menu.propTypes = {
    store: PropTypes.object.isRequired,
};

export default observer(Menu);
