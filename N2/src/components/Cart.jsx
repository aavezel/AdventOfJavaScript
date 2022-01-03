import React from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import CartItem from './CartItem';
import Totals from './Totals';
import EmptyCart from './EmptyCart';

export const Cart = ({ store }) => {
    const { cartItems } = store;

    if (cartItems.length === 0) {
        return <EmptyCart />;
    }

    const increaseCount = (name) => () => store.increaseCount(name);
    const decreaseCount = (name) => () => store.decreaseCount(name);

    return (
        <div className="panel cart">
            <h1>Your Cart</h1>
            <ul className="cart-summary">
                {cartItems.map(({name, price, image, alt, count}) => (
                    <li key={name}>
                        <CartItem
                            name={name}
                            price={price}
                            image={image}
                            alt={alt}
                            count={count}
                            increaseCount={increaseCount(name)}
                            decreaseCount={decreaseCount(name)}
                        />
                    </li>
                ))}
            </ul>
            <Totals {...store.totals} />
        </div>
    );
};

Cart.propTypes = {
    store: PropTypes.object.isRequired,
};

export default observer(Cart);
