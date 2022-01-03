import {createEvent, createStore} from 'effector';
import {PinNumberEvent} from '~/types';

const setPinNumber = createEvent<PinNumberEvent>();

const $codeList = createStore(['','','',''])
    .on(setPinNumber, ((state, {position, value}) => state.map((item, index) => index == position ? value : item)));


export {
    setPinNumber,
    $codeList
};