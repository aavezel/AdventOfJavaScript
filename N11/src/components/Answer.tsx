import React, { useEffect, useRef, useState } from 'react';

interface IAnswerProps {
    texts: string[],
    expand: boolean,
}

export const Answer: React.FC<IAnswerProps> = ({texts, expand}) => {
    const [expandHeight, setExpandHeight] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => setExpandHeight((ref.current?.scrollHeight ?? 0) + 60), []);

    const style = expand ? {height: expandHeight} : {};

    return (
        <div className='answer' ref={ref} style={style}>
            {texts.map((text, idx) =>(<p key={idx}>{text}</p>))}
        </div>
    );
};

export default Answer;