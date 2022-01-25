import data from './store.json';
import generateAside, {initSelector} from './aside';
import generateMain from './main';

function initialize() {
    generateAside();
    generateMain();
}


document.addEventListener("DOMContentLoaded", initialize);
window.addEventListener("load", initSelector);