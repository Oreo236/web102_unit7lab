import './Card.css'
import { Link } from 'react-router-dom'


const Card = (props) =>  {

  return (
    <Link to={`/crewmate/${props.id}`} className="card-link" style={{borderColor: props.color}}>
      <div className="Card">
          <h2 className="name">Name of Crewmate: {props.name}</h2>
          <h3 className="speed">Speed of Crewmate: {props.speed}  mph</h3>
          <p className="color">Color of Crewmate: {props.color}</p>
          <Link to={`/edit/${props.id}`}>
            <button className="edit_button">Edit Crewmate</button>
          </Link>
      </div>
    </Link>
  );
};

export default Card