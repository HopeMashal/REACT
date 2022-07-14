import './App.css';

function Card(props) {
  return (
    <div className="card">
      <img className="image" alt="picture" src={props.image}/>
      <h2 className="title">{props.title}</h2>
      <p className='text'>{props.text}</p>
      <div className='links'>
        <a className='link' href={props.link1}>SHARE</a>
        <a className='link' href={props.link1}>EXPLORE</a>
      </div>
    </div>
  );
}

export default Card;
