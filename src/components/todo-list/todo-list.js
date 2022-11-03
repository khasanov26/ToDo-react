import TodoItem from '../todo-item/todo-item';

import './todo-list.css';

const TodoList = ({ data, onDelete, onToggleImportant, onToggleReady }) => {
  const items = data.map((item) => {
    const { id, ...itemProps } = item;
    return (
      <TodoItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleImportant={() => onToggleImportant(id)}
        onToggleReady={() => onToggleReady(id)}
      />
    );
  });
  return <ul className="todo-list">{items}</ul>;
};

export default TodoList;
