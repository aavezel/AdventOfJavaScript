import {createEvent, createStore, createEffect} from 'effector';
import { Question } from '~/types';
import { data } from './data';


const loadQuestionsFx = createEffect(() => data.map((item) => ({...item, expand: false})));
const toggleQuestion = createEvent<number>();


const $questions = createStore<Question[]>([])
    .on(loadQuestionsFx.doneData, (_, data) => data)
    .on(toggleQuestion, (store, index) => store.map((item, idx) => {
        if (idx === index) { return {...item, expand: !item.expand};}
        return item;
    }));


export {
    $questions,
    loadQuestionsFx,
    toggleQuestion
};