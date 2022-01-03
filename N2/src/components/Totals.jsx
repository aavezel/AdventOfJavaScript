import React from 'react';
import PropTypes from 'prop-types';

export const Totals = ({ subtotal, tax, total }) => (
    <div className="totals">
        <div className="line-item">
            <div className="label">Subtotal:</div>
            <div className="amount price subtotal">${subtotal / 100}</div>
        </div>
        <div className="line-item">
            <div className="label">Tax:</div>
            <div className="amount price tax">${tax / 100}</div>
        </div>
        <div className="line-item total">
            <div className="label">Total:</div>
            <div className="amount price total">${total / 100}</div>
        </div>
    </div>
);

Totals.propTypes = {
    subtotal: PropTypes.number.isRequired,
    tax: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

export default Totals;
