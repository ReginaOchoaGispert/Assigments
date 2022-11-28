import React from "react";
import './Card.css';

function Card(props) {
    const image = "https://picsum.photos/200";
    return (
     <div className="Tarjeta">
        <div className="Claro">
          <h2> { props.name } </h2>
          <img className="Imagen"
            src= { props.img }
            alt="random"
          />
          <hr></hr>
        </div>
        <div className="Fuerte">
          <p> { props.phone } </p>
          <p> { props.email } </p>
        </div>
     </div>
    );
}

export default Card;