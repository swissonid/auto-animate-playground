import { useRef, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';

import { useAutoAnimate } from '@formkit/auto-animate/react';
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
  const [parent] = useAutoAnimate(/* optional config */);

  const addTodo = () =>
    setTodo((current) => [...current, `Item ${current.length + 1}`]);
  return (
    <>
      <ul ref={parent}>
        {todos.map((todo) => (
          <Item key={todo} title={todo} />
        ))}
      </ul>
      <button onClick={addTodo}>Add number</button>
    </>
  );
}

export default App;
