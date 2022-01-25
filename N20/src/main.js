import {$el} from './helpers';
import data from './store.json';

function generateCover(item) {
    return new $el('div', {class: "cover"}, {}, [
        new $el('img', {src: item.image, alt: item.episode, width: 255, height: 255}, {}, [])
    ]);

}

function generateContent(item) {
    return new $el('div', {class: "content"}, {}, [
        new $el('h1', {}, {}, [item.title]),
        new $el('p', {}, {}, [item.description]),
        new $el('a', {class: 'more', href: '#'}, {}, ['More'])
    ]);
}

function generateMain() {
    const main = document.querySelector(".wrapper main");
    data.forEach((item) => {
        const div = new $el('div', {class: "episode"}, {}, [
            generateCover(item),
            generateContent(item),
        ]);
        div.appendTo(main);
    })
}

export default generateMain;