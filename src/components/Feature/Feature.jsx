import './Feature.css';

function Feature(props) {
  return (
    <div className="feature">
      <div className={'feature-img-' + props.name}></div>
      <h2>{props.title}</h2>
      <p>{props.text}</p>
    </div>
  );
}

export default Feature;
