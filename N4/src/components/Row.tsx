import React from 'react';
import {Row} from 'api/types';
import KeyboardKey from 'components/KeyboardKey';

interface IKeyboardRowProps {
    row: Row,
    jiggleCode: string | null
}

const KeyboardRow: React.FC<IKeyboardRowProps> = ({row, jiggleCode}) => (
    <div className="row">
        {row.map((key) => (<KeyboardKey data={key} key={key.code} jiggleCode={jiggleCode} />))}
    </div>
);

export default KeyboardRow;