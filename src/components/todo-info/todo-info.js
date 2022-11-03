import './todo-info.css';

const todoInfo = ({ todo, todoImportant, todoReady }) => {
  return (
    <div className="todo-info">
      <h2 className="todo-info-head">Today’s Tasks</h2>
      <div className="todo-info-list">
        <div className="todo-info-item todo-info-item-important">
          <h2>Important</h2> <span>{todoImportant}</span>
        </div>
        <div className="todo-info-item todo-info-item-ready">
          <h2>Ready</h2>
          <span>{todoReady}</span>
        </div>
        <div className="todo-info-item todo-info-item-all">
          <h2>All</h2>
          <span>{todo}</span>
        </div>
      </div>
    </div>
  );
};

export default todoInfo;
