import React from 'react';
import Menu from './Menu';
import Cart from './Cart';
import MenuStore from '../store/MenuStore';

export const App = () => (
    <>
        <Menu store={MenuStore} />
        <Cart store={MenuStore} />
    </>
);

export default App;
