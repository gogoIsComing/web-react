import React from 'react';
import { nanoid } from 'nanoid';

import TodoList from '../../components/TodoList/TodoList';
import TodoFilter from '../../components/TodoFilter/TodoFilter';

import './App.css';

const filterMap = {
  all: () => true,
  active: (item) => !item.checked,
  completed: (item) => item.checked,
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [
        {
          text: 'eat food',
          checked: false,
          id: nanoid(),
        },
        {
          text: 'drink water',
          checked: true,
          id: nanoid(),
        },
        {
          text: 'play video games',
          checked: false,
          id: nanoid(),
        },
      ],
      filterType: 'all',
      isLight: false,
      text: '',
      checked: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleTodoCheckboxChange = this.handleTodoCheckboxChange.bind(this);
    this.handleTodoCrossClick = this.handleTodoCrossClick.bind(this);
    this.handleFilterClick = this.handleFilterClick.bind(this);
    this.handleClearClick = this.handleClearClick.bind(this);
    this.handleModeClick = this.handleModeClick.bind(this);
  }

  handleInputChange(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleCheckboxChange() {
    this.setState({
      checked: !this.state.checked,
    });
  }

  handleFormSubmit(e) {
    e.preventDefault();

    const newTodo = {
      text: this.state.text,
      checked: this.state.checked,
      id: nanoid(),
    };

    this.setState({
      list: [...this.state.list, newTodo],
      text: '',
      checked: false,
    });
  }

  handleTodoCheckboxChange(id) {
    const newList = this.state.list.map((item) => {
      if (item.id === id) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });

    this.setState({
      list: newList,
    });
  }

  handleTodoCrossClick(id) {
    const newList = this.state.list.filter((item) => item.id !== id);

    this.setState({
      list: newList,
    });
  }

  handleFilterClick(filterType) {
    this.setState({
      filterType: filterType,
    });
  }

  handleClearClick() {
    const newList = this.state.list.filter(filterMap['active']);

    this.setState({
      list: newList,
    });
  }

  handleModeClick() {
    this.setState({
      isLight: !this.state.isLight,
    });
  }
  render() {
    let checkboxClassList = this.state.checked
      ? 'checked-checkbox'
      : 'checkbox';

    checkboxClassList += this.state.isLight
      ? ' checkbox-light'
      : ' checkbox-dark';

    const modeIconClassList = this.state.isLight
      ? 'mode-icon-light'
      : 'mode-icon-dark';

    const headerClassList = this.state.isLight ? 'header-light' : 'header-dark';

    const bodyClassList = this.state.isLight ? 'body-light' : 'body-dark';

    const formClassList = this.state.isLight ? 'form-light' : 'form-dark';

    const infoClassList = this.state.isLight ? 'info-light' : 'info-dark';

    const inputClassList = this.state.isLight ? 'input-light' : 'input-dark';

    const attributionClassList = this.state.isLight
      ? 'attribution-light'
      : 'attribution-dark';

    const list = this.state.list.filter(filterMap[this.state.filterType]);
    const activeItemsCount = this.state.list.filter(filterMap['active']).length;
    return (
      <div className={bodyClassList}>
        <header className={headerClassList}>
          <div className="wrapper">
            <div className="logo-wrapper">
              <span>todo</span>
              <div
                className={modeIconClassList}
                onClick={this.handleModeClick}
              ></div>
            </div>
            <form className={formClassList} onSubmit={this.handleFormSubmit}>
              <div
                className={checkboxClassList}
                onClick={this.handleCheckboxChange}
              ></div>
              <input
                type="text"
                className={inputClassList}
                placeholder="Create a new todo..."
                value={this.state.text}
                onChange={this.handleInputChange}
              />
            </form>
          </div>
        </header>
        <main>
          <TodoList
            list={list}
            onTodoCheckboxChange={this.handleTodoCheckboxChange}
            onTodoCrossClick={this.handleTodoCrossClick}
            onFilterClick={this.handleFilterClick}
            activeItemsCount={activeItemsCount}
            filterType={this.state.filterType}
            onClearClick={this.handleClearClick}
            isLight={this.state.isLight}
          />
          <TodoFilter
            onFilterClick={this.handleFilterClick}
            filterType={this.state.filterType}
            isLight={this.state.isLight}
          />
          <span className={infoClassList}>Drag and drop to reorder list</span>
        </main>

        <div className={attributionClassList}>
          Challenge by{' '}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Ahmad AlZoubi</a>.
        </div>
      </div>
    );
  }
}

export default App;
