import { useState } from 'react';
import './App.css';
import { AutoAnimateTodoList } from './AutoAnimateList';

function App() {
  const [todos, setTodo] = useState<string[]>([]);

  const addTodo = () =>
    setTodo((current) => [...current, `Item ${current.length + 1}`]);
  const removeTodo = () =>
    setTodo((current) => {
      const newList = [...current];
      newList.pop();
      return newList;
    });
  return (
    <>
      <AutoAnimateTodoList
        todos={todos}
        onAddClicked={addTodo}
        onRemoveClided={removeTodo}
      />
    </>
  );
}

export default App;
