import React from 'react';

interface IAmountProps {
    price: number
}

export const Amount: React.FC<IAmountProps> = ({price})=> (
    <div className="amount">
        <sup>$</sup>
        <span className="dollars">{price}</span>
    </div>
);

export default Amount;