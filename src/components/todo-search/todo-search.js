import { Component } from 'react';

import './todo-search.css';

class TodoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({
      term: term,
    });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <input
        className="todo-search"
        type="text"
        placeholder="Search"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      />
    );
  }
}

export default TodoSearch;
