import React from 'react';
import PianoKey from './PianoKey';
import {PIANO} from '../store';

export const App = () => (
    <svg width="1387" height="467" viewBox="0 0 1387 467" fill="none" xmlns="http://www.w3.org/2000/svg">
        {PIANO.map(({type, path, audio}, idx) => <PianoKey key={idx} type={type} path={path} audio={audio}/>)}
    </svg>
);

export default App;
