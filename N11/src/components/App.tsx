import React, { useEffect } from 'react';
import { useList } from 'effector-react';
import { $questions, loadQuestionsFx } from '~/api/models';
import ListItem from './ListItem';


export const App = () => {
    useEffect(() => { loadQuestionsFx(); });

    return (
        <ul>
            {useList($questions, ({title, answer, expand}, idx) => (
                <li key={idx} className={expand ? 'expand' : ''}>
                    <ListItem index={idx} question={title} texts={answer} expand={expand}/>
                </li>
            ))}
        </ul>
    );
};

export default App;