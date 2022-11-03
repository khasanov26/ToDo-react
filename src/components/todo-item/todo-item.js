// import { Component } from 'react';
// import './todo-item.css';

// class TodoItem extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       important: this.props.important,
//     };
//   }

//   render() {
//     const { name, onDelete, onToggleImportant, important, onToggleReady, ready } = this.props;
//     let todoItem = 'todo-item';
//     if (important) {
//       todoItem += '-important';
//     }

//     if (ready) {
//       todoItem += ' todo-item-ready';
//     }
//     return (
//       <li className={todoItem}>
//         <span className="todo-item-name">{name}</span>
//         <div className="button-group">
//           <button type="button" onClick={onToggleReady}>
//             Готово
//           </button>
//           <button type="button" onClick={onToggleImportant}>
//             Сделать важным
//           </button>
//           <button type="button" onClick={onDelete}>
//             Удалить
//           </button>
//         </div>
//       </li>
//     );
//   }
// }

// export default TodoItem;

// import { Component } from 'react';
import './todo-item.css';

import readyIcon from './ready.svg';
import importantIcon from './important.svg';
import deleteIcon from './delete.svg';

const TodoItem = (props) => {
  const { name, onDelete, onToggleImportant, important, onToggleReady, ready } = props;

  let todoItem = 'todo-item';
  if (important) {
    todoItem += ' todo-item-important';
  }

  if (ready) {
    todoItem += ' todo-item-ready';
  }

  return (
    <li className={todoItem}>
      <span className="todo-item-name">{name}</span>
      <div className="button-group">
        <button type="button" onClick={onToggleReady}>
          <img src={readyIcon} alt="ready button" />
        </button>
        <button type="button" onClick={onToggleImportant}>
          <img src={importantIcon} alt="important button" />
        </button>
        <button type="button" onClick={onDelete}>
          <img src={deleteIcon} alt="all button" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
