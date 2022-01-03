import React from 'react';

interface IScoreProps {
    score: number;
}

export const Score: React.FC<IScoreProps> = ({score}) => (
    <div className="score">{score}</div>
);

export default Score;