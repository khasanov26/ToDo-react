import { Component } from 'react';

import TodoInfo from '../todo-info/todo-info';
import TodoSearch from '../todo-search/todo-search';
import TodoFilter from '../todo-filter/todo-filter';
import TodoList from '../todo-list/todo-list';
import TodoAdd from '../todo-add/todo-add';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'pay the bills', important: true, ready: false, id: 1 },
        { name: 'housework', important: false, ready: true, id: 2 },
        { name: 'read a book', important: false, ready: false, id: 3 },
        { name: 'learn English', important: true, ready: false, id: 4 },
      ],
      term: '',
      filter: 'all',
    };
    this.maxId = 5;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      let before = data.slice(0, index);
      let after = data.slice(index + 1);
      let newArr = [...before, ...after];
      return {
        data: newArr,
      };

      // return {
      //   data: data.filter(item => item.id !==)
      // }
    });
  };

  addItem = (name) => {
    const newItem = {
      name: name,
      import: false,
      id: this.maxId++,
      ready: false,
    };
    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      return {
        data: newArr,
      };
    });
  };

  onToggleImportant = (id) => {
    this.setState(({ data }) => {
      console.log('не зел');
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      let newItem;

      if (old.ready) {
        newItem = { ...old, important: false };
      } else {
        newItem = { ...old, important: !old.important };
      }

      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];

      return {
        data: newArr,
      };
    });
  };

  onToggleReady = (id) => {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);
      const old = data[index];
      const newItem = { ...old, ready: !old.ready, important: false };
      const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)];
      console.log('asd');
      return {
        data: newArr,
      };
    });
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item.name.toLowerCase().indexOf(term.toLowerCase()) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({
      term: term,
    });
  };

  filterTodo = (items, filter) => {
    switch (filter) {
      case 'important':
        return items.filter((item) => item.important);
      case 'ready':
        return items.filter((item) => item.ready);
      default:
        return items;
    }
  };

  onFilterSelect = (filter) => {
    this.setState({ filter: filter });
  };

  render() {
    const { data, term, filter } = this.state;

    const todo = this.state.data.length;
    const todoImportant = this.state.data.filter((item) => item.important).length;
    const todoReady = this.state.data.filter((item) => item.ready).length;
    const searchData = this.filterTodo(this.searchEmp(data, term), filter);
    return (
      <div className="app">
        <TodoSearch onUpdateSearch={this.onUpdateSearch} />
        <div className="search-panel">
          <div>Tasks</div>
          <TodoFilter filter={filter} onFilterSelect={this.onFilterSelect} />
        </div>
        <TodoList
          className="todo-list"
          data={searchData}
          onDelete={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleReady={this.onToggleReady}
        />
        <div className="tasks-bar">
          <TodoInfo todo={todo} todoImportant={todoImportant} todoReady={todoReady} />

          <TodoAdd onAdd={this.addItem} />
        </div>
      </div>
    );
  }
}

export default App;

// function App() {
//   const data = [
//     { name: 'Готовка', important: true, id: 1 },
//     { name: 'Уборка', important: false, id: 2 },
//   ];

//   return (
//     <div className="app">
//       <TodoInfo />

//       <div className="search-panel">
//         <TodoSearch />
//         <TodoFilter />
//       </div>
//       <TodoList data={data} onDelete={id => console.log(id)}/>
//       <TodoAdd />
//     </div>
//   );
// }
