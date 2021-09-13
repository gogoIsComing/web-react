import './TodoFilter.css';

function TodoFilter(props) {
  const filterMap = {
    all: '',
    active: '',
    completed: '',
  };
  filterMap[props.filterType] = 'active-filter-button';

  const todoFilterSectionClassList = props.isLight
    ? 'todo-filter-section-light'
    : 'todo-filter-section-dark';

  const buttonClassList = props.isLight ? 'button-light' : 'button-dark';

  return (
    <section className={todoFilterSectionClassList}>
      <button
        className={filterMap['all'] + ' ' + buttonClassList}
        onClick={() => props.onFilterClick('all')}
      >
        All
      </button>
      <button
        className={filterMap['active'] + ' ' + buttonClassList}
        onClick={() => props.onFilterClick('active')}
      >
        Active
      </button>
      <button
        className={filterMap['completed'] + ' ' + buttonClassList}
        onClick={() => props.onFilterClick('completed')}
      >
        Completed
      </button>
    </section>
  );
}

export default TodoFilter;
