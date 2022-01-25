import {$el} from './helpers';
import data from './store.json';
import logo from './images/logo.svg';

const handleSelectedElement = idx => e => {
  const {top} = e.currentTarget.parentElement.getBoundingClientRect ();
  const selector = document.querySelector ('#selector');
  selector.style.top = `${top - 15}px`;

  const episode = document.querySelector (`main .episode:nth-child(${idx + 1})`);
  const {top: episodeTop} = episode.getBoundingClientRect()
  episode.parentElement.scrollBy({top: episodeTop-100, behavior: 'smooth'})
};

function generateLink (parent) {
  const a = new $el (
    'a',
    {href: 'http://compressed.fm', target: '_blank'},
    {},
    [new $el ('img', {src: logo, alt: 'Compressed.fm', height: 104})]
  );
  a.appendTo (parent);
}

function generateList (parent) {
  const list = data.map ((item, idx) => {
    const className = idx === 0 ? 'selected' : '';
    return new $el ('li', {class: className}, {}, [
      new $el ('a', {href: '#'}, {click: handleSelectedElement (idx)}, [
        new $el ('div', {class: 'episode'}, {}, [item.episode]),
        new $el ('div', {class: 'title'}, {}, [item.title]),
      ]),
    ]);
  });
  const ul = new $el ('ul', {id: 'tabs'}, {}, list);
  ul.appendTo (parent);
}

function generateSelector (parent) {
  const div = new $el ('div', {id: 'selector'}, {}, []);
  div.appendTo (parent);
}

export function initSelector () {
  console.log ('init');
  const firstLi = document.querySelector ('aside ul li');
  const {top} = firstLi.getBoundingClientRect ();
  const selector = document.querySelector ('#selector');
  selector.style.top = `${top - 15}px`;
}

function generateAside () {
  const aside = document.querySelector ('.wrapper aside');
  generateLink (aside);
  generateList (aside);
  generateSelector (aside);
}

export default generateAside;
