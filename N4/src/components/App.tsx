import React, { useEffect, useState } from 'react';
import {KEYBOARD} from 'api/data';
import {Key} from 'api/types';
import Game from 'api/Game';
import Row from 'components/Row';
import Score from 'components/Score';


const getRows = (keys: Key[]): Key[][] =>
    keys.reduce((acc: Key[][], key) => {
        const {row} = key;
        acc[row] = acc[row] || [];
        acc[row].push(key);
        return acc;
    }, []);

export const App = () => {
    const [jiggleCode, setJiggleCode] = useState<string | null>(null);
    const [score, setScore] = useState<number>(0);
    const rows = getRows(KEYBOARD);

    useEffect(() => {
        Game.start({
            codeChanged: (newCode) => setJiggleCode(newCode),
            scoreChanged: (score) => setScore(score)
        });
    }, []);

    return (
        <>
            <Score score={score} />
            <h1>Eyes on the Screen</h1>
            {rows.map((row, idx) => <Row row={row} key={idx} jiggleCode={jiggleCode}/>)}
        </>
    );
};

export default App;
