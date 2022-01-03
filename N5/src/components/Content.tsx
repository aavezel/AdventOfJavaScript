import React from "react";
import {useList} from 'effector-react';
import {$list, toggle} from 'api/store';

const Content = () => {
    const onChangeSelected = (id: number) => () => toggle(id);

    const listItems = useList($list, ({id, label, selected}) => {
        const idVal = `episode-${id}`;
        return (
            <li>
                <label htmlFor={idVal}>
                    <input type="checkbox" name={idVal} id={idVal} checked={selected} onChange={onChangeSelected(id)}/>
                    <span>{id} || {label}</span>
                </label>
            </li>
        );
    });

    return (
        <div className="content">
            <h1>Listen to all the Compressed.fm Episodes</h1>

            <ul className="episodes">
                {listItems}
            </ul>
        </div>
    );
};

export default Content;