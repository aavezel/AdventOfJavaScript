import React from 'react';
import PropTypes from 'prop-types';

export const PianoKey = ({type, path, audio}) => {
    const handleClick = (e) => {
        e.preventDefault();
        new Audio(`audio/${audio}`).play();
    };

    return (
        <a href="#">
            <path className={type} d={path} onClick={handleClick}/>
        </a>
    );
};

PianoKey.propTypes = {
    type: PropTypes.string.required,
    path: PropTypes.string.required,
    audio: PropTypes.string.required,
};

export default PianoKey;
