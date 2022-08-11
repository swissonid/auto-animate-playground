import { MouseEventHandler } from 'react';
import { useAutoAnimate } from '@formkit/auto-animate/react';
type ItemProps = {
  title: string;
};
function Item({ title }: ItemProps) {
  return (
    <>
      <div className="list-item">{title}</div>
    </>
  );
}
type AutoAnimateTodoListProps = {
  todos: string[];
  onAddClicked: MouseEventHandler | undefined;
  onRemoveClided: MouseEventHandler | undefined;
};
export function AutoAnimateTodoList({
  todos,
  onAddClicked,
  onRemoveClided,
}: AutoAnimateTodoListProps) {
  const [parent] = useAutoAnimate();
  return (
    <>
      <button onClick={onRemoveClided}>Remove</button>
      <ul ref={parent}>
        {todos.map((todo) => (
          <Item key={todo} title={todo} />
        ))}
      </ul>
      <button onClick={onAddClicked}>Add number</button>
    </>
  );
}
