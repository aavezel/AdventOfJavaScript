import React from 'react';


interface IQuestionProps {
    image: string;
    text: string;
    onClick?: () => void;
}

export const Question: React.FC<IQuestionProps> = ({image, text, onClick}) => (
    <a href="#" onClick={onClick}>
        <div className="question">
            <div className="question-mark">
                <img src={image} alt="question" />
            </div>
            <div className="content">{text}</div>
        </div>
    </a>
);

export default Question;