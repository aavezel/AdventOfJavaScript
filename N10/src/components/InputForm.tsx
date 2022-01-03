import { useList } from "effector-react";
import React, { KeyboardEvent, ClipboardEvent, useRef, useEffect} from "react";
import {setPinNumber, $codeList} from '../api/models';

export const InputForm = () => {
    const refs = [
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
        useRef<HTMLInputElement>(null),
    ];

    const buttonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        $codeList.watch((state) => { // use sample after form submit method implements
            if (state.every((item) => item != '')) {
                buttonRef?.current?.click();
            }
        });
    }, []);

    const handleInputKeyPress = (position: number) =>
        ({key: value}: KeyboardEvent) => {
            if (/[0-9]/.test(value)) {
                setPinNumber({position, value});
                if (position < refs.length -1) {
                    refs[position + 1]?.current?.focus();
                }
            }
        };

    const inputs = useList($codeList, (value: string, idx: number) => (
        <input type="text" maxLength={1} value={value} onKeyPress={handleInputKeyPress(idx)} ref={refs[idx]} />
    ));

    const handlePaste = (e: ClipboardEvent<HTMLFormElement>) => {
        const strJson = JSON.stringify(e.clipboardData.getData('text/plain'));
        const str = JSON.parse(strJson);
        if (/^[0-9]{4}$/.test(str)) {
            str.split('').map((value: string, position: number) => setPinNumber({value, position}));
        }
    };

    return (
        <form action="" onPaste={handlePaste}>
            <div className="fields">
                {inputs}
            </div>
            <button type="submit" ref={buttonRef}>Verify</button>
        </form>
    );
};

export default InputForm;