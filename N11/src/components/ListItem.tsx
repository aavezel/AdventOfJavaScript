import React from 'react';
import { toggleQuestion } from '~/api/models';
import Answer from './Answer';
import Question from './Question';

interface IListItemProps {
    index: number;
    expand: boolean;
    question: string;
    texts: string[];
}

export const ListItem: React.FC<IListItemProps> = ({index, expand, question, texts}) => {
    const image = index % 2 === 0 ? 'images/question-1.svg' : 'images/question-2.svg';
    const expandItem = () => toggleQuestion(index);

    return (
        <>
            <Question image={image} text={question} onClick={expandItem}/>
            <Answer texts={texts} expand={expand}/>
        </>
    );
};

export default ListItem;