import Todo from '../Todo/Todo';
import TodoFilter from '../TodoFilter/TodoFilter';

import './TodoList.css';

function TodoList(props) {
  const list = props.list.map((item) => (
    <Todo
      key={item.id}
      item={item}
      onTodoCheckboxChange={props.onTodoCheckboxChange}
      onTodoCrossClick={props.onTodoCrossClick}
      isLight={props.isLight}
    />
  ));

  const todoListSectionClassList = props.isLight
    ? 'todo-list-section-light'
    : 'todo-list-section-dark';

  const todoControlClassList = props.isLight
    ? 'todo-control-light'
    : 'todo-control-dark';

  const ulClassList = props.isLight ? 'ul-light' : 'ul-dark';

  return (
    <section className={todoListSectionClassList}>
      <ul className={ulClassList}>{list}</ul>
      <div className={todoControlClassList}>
        <span className="items-remain">
          {props.activeItemsCount} items left
        </span>
        <TodoFilter
          onFilterClick={props.onFilterClick}
          filterType={props.filterType}
          isLight={props.isLight}
        />
        <button className="clear" onClick={props.onClearClick}>
          Clear Completed
        </button>
      </div>
    </section>
  );
}

export default TodoList;
