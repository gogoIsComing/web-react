import './Todo.css';

function Todo(props) {
  let checkboxClassList = props.item.checked ? 'checked-checkbox' : 'checkbox';

  checkboxClassList += props.isLight ? ' checkbox-light' : ' checkbox-dark';
  const spanClassList = props.item.checked
    ? props.isLight
      ? 'checked-span-light'
      : 'checked-span-dark'
    : '';

  const todoClassList = props.isLight ? 'todo-light' : 'todo-dark';

  return (
    <li className={todoClassList}>
      <div
        className={checkboxClassList}
        onClick={() => props.onTodoCheckboxChange(props.item.id)}
      ></div>
      <span className={spanClassList}>{props.item.text}</span>
      <div
        className="cross"
        onClick={() => props.onTodoCrossClick(props.item.id)}
      ></div>
    </li>
  );
}

export default Todo;
