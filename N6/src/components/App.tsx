import React, {useState} from 'react';
import Amount from './Amount';
import BuyNow from './BuyNow';
import Range from './Range';

export const App = () => {
    const [price, setPrice] = useState(50);
    return (
        <>
            <Amount price={price}/>
            <Range value={price} onChange={setPrice}/>
            <BuyNow />
        </>
    );}
;

export default App;