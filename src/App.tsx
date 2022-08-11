import { useRef, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import autoAnimate from '@formkit/auto-animate';
type ItemProp = {
  title: string;
};
function Item({ title }: ItemProp) {
  return (
    <>
      <div className="list-item">{title}</div>
    </>
  );
}

function App() {
  const [todos, setTodo] = useState<string[]>([]);
  const parent = useRef(null);

  useEffect(() => {
    parent.current && autoAnimate(parent.current);
  }, [parent]);

  function addItemToList() {
    setTodo((currentList) => {
      return [...currentList, `Item ${currentList.length + 1}`];
    });
  }

  function removeItem() {
    setTodo((currentList) => {
      currentList.pop();
      return [...currentList];
    });
  }

  return (
    <div className="App">
      <button onClick={removeItem}>Remove</button>
      <ul ref={parent}>
        <li>
          {todos.map((itemTitle) => (
            <Item key={itemTitle} title={itemTitle} />
          ))}
        </li>
      </ul>
      <button onClick={addItemToList}>Add</button>
    </div>
  );
}

export default App;
