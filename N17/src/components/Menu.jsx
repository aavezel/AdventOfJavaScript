import React, {useState, useRef, useEffect} from 'react'
import { observer } from 'mobx-react'

export const Menu = ({ store }) => {
  const topics = store.topics;
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [topOffset, setTopOffset] = useState(null);
  const ulRef = useRef();

  // Обработка скроллинга
  useEffect(() => {
    const handleScroll = () => {
      const frameSize = window.innerHeight / 3;
      const calculatedSelectedIndex = store.calculateSelectedIndex(window.scrollY, frameSize)
      setSelectedIndex(calculatedSelectedIndex);
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [topics])

  // Расчет позиции
  useEffect(() => {
    const {current} = ulRef
    if (current) {
      const li = current.querySelector(`li:nth-child(${selectedIndex+1})`)
      if (li) {
        setTopOffset(li.offsetTop);
      }
    }
  }, [selectedIndex, topics]);

  const handleChangeTopic = ({top}) => (e) => {
    e.preventDefault();
    window.scrollTo({top: top - 50, left: 0, behavior: 'smooth'});
  }

  return (
    <aside>
      <div>
        <div className="selected-index" style={{top: topOffset}}></div>
        <div className="table-of-contents">Table of Contents</div>
        <ul ref={ulRef}>
          {topics.map((topic, idx) => (
            <li className={idx === selectedIndex ? 'selected' : ''} key={topic.text}>
              <a href="#" onClick={handleChangeTopic(topic)}>{topic.text}</a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}

export default observer(Menu)
