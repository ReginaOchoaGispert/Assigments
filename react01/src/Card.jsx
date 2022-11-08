import React from "react";
import './Card.css';

function Card(props) {
    const image = "https://picsum.photos/200";
    return (
     <div className="Tarjeta">
        <h2> { props.name } </h2>
        <img 
          src= { props.img }
          alt="random"
        />
        <p> { props.phone } </p>
        <p> { props.email } </p>
     </div>
    );
}

export default Card;