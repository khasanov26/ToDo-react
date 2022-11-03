import { Component } from 'react';

import './todo-add.css';

import addIcon from './add.svg';

class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ``,
    };
  }

  onValueChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.name.length < 3) return;
    if (this.state.name.length < 3) return;
    this.props.onAdd(this.state.name);
    this.setState({
      name: '',
    });
  };

  render() {
    const { name } = this.state;

    return (
      <div className="todo-add">
        <h3>Add new task</h3>
        <form onSubmit={this.onSubmit} className="todo-add-form">
          <input
            type="text"
            placeholder="write your task"
            onChange={this.onValueChange}
            name="name"
            value={name}
          />
          <button type="submit">
            <img src={addIcon} alt="add button" />
          </button>
        </form>
      </div>
    );
  }
}

export default TodoAdd;

// const TodoAdd = () => {
//   return (
//     <div className="todo-add">
//       <h3>Добавить новое дело</h3>
//       <form>
//         <input type="text" placeholder="Название дела" />
//         <button type="submit">Добавить</button>
//       </form>
//     </div>
//   );
// };
