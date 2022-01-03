import React, {useEffect} from 'react';
import Cover from 'components/Cover';
import Content from 'components/Content';
import {shiftPressed, shiftUnPressed} from 'api/store';

export const App = () => {
    useEffect(() => {
        const keydownup = (func: () => void) => (e: KeyboardEvent) => {
            if (e.key === 'Shift') {
                e.preventDefault();
                func();
            }
        };
        const keydown = keydownup(shiftPressed);
        const keyup = keydownup(shiftUnPressed);

        document.addEventListener('keydown', keydown);
        document.addEventListener('keyup', keyup);
        return () => {
            document.addEventListener('keydown', keydown);
            document.addEventListener('keyup', keyup);
        };
    });
    return (
        <>
            <Cover />
            <Content />
        </>
    );
};

export default App;