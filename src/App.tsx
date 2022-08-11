import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
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

  function addItemToList() {
    setTodo((currentList) => {
      return [...currentList, `Item ${currentList.length + 1}`];
    });
  }

  return (
    <div className="App">
      <ul>
        <li>
          {todos.map((itemTitle) => (
            <Item title={itemTitle} />
          ))}
        </li>
      </ul>
      <button onClick={addItemToList}>Add</button>
    </div>
  );
}

export default App;
