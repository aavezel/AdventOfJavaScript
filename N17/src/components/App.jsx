import React from 'react';
import Menu from './Menu';
import Text from './Text';
import Store from '../store/ViewStore';

export const App = () => (
    <>
        <Menu store={Store} />
        <Text store={Store} />
    </>
);

export default App;
