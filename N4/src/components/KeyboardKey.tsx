import React from 'react';
import cn from 'classnames';
import {Key} from 'api/types';

interface IKeyboardKeyProps {
    data: Key,
    jiggleCode?: string | null
}

export const KeyboardKey: React.FC<IKeyboardKeyProps> = ({data, jiggleCode}) => {
    const {code, text, utility = false} = data;
    const className = cn('key', {
        'utility': utility,
        'jiggle' : jiggleCode === code
    });
    return (
        <button className={className}>{text}</button>
    );
};

export default KeyboardKey;

