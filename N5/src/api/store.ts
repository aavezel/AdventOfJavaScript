import {createEvent, createStore, combine, guard, sample, Event} from 'effector';
import {data} from './data';

const toggle = createEvent<number>();

const toggleOne = createEvent<number>();
const toggleArray = createEvent<[number, number]>();
const setFirstSelected = createEvent<number | null>();
const shiftPressed = createEvent();
const shiftUnPressed = createEvent();


const $shiftIsPressed = createStore(false)
    .on(shiftPressed, () => true)
    .reset(shiftUnPressed);


const $firstSelected = createStore<number | null>(null)
    .on(setFirstSelected, (_, value) => value);

const $list = createStore(data)
    .on(
        toggleOne, (state, id) => state.map((item) => {
            if (item.id === id) {
                return {...item, selected: !item.selected};
            }
            return item;
        })
    )
    .on(toggleArray, (state, [a, b]) => {
        const start = Math.min(a, b);
        const end = Math.max(a, b);
        return state.map((item) => {
            if (item.id > start && item.id <= end) {
                return {...item, selected: !item.selected};
            }
            return item;
        });
    });

const $combinedShiftAndFirst = combine({shiftIsPressed: $shiftIsPressed, firstSelected: $firstSelected});

type SampledToggleType ={
    shiftIsPressed: boolean,
    firstSelected: number | null,
    value: number
}

const sampledToggle: Event<SampledToggleType> = sample({
    clock: toggle,
    source: $combinedShiftAndFirst,
    fn: (state, value) => ({...state, value})
});

guard({
    source: sampledToggle,
    filter: ({shiftIsPressed}) => !shiftIsPressed,
    target: toggleOne.prepend<SampledToggleType>((item)=>item.value)
});

guard({
    source: sampledToggle,
    filter: ({shiftIsPressed, firstSelected}) => shiftIsPressed && firstSelected!=null,
    target: [
        toggleArray.prepend<SampledToggleType>((item)=>([item.firstSelected ?? 0, item.value])),
        setFirstSelected.prepend(() => null)
    ]
});

guard({
    source: sampledToggle,
    filter: ({shiftIsPressed, firstSelected}) => shiftIsPressed && firstSelected===null,
    target: [
        toggleOne.prepend<SampledToggleType>((item)=>item.value),
        setFirstSelected.prepend<SampledToggleType>((item)=> item.value)
    ]
});


export {
    $list,
    shiftPressed,
    shiftUnPressed,
    toggle
};