import { nanoid } from 'nanoid';
import './Column.css';

function Column(props) {
  const list = props.list.map((item) => (
    <li key={nanoid()}>
      <a href="#">{item}</a>
    </li>
  ));

  return (
    <div className="column">
      <span>{props.title}</span>
      <ul>{list}</ul>
    </div>
  );
}

export default Column;
