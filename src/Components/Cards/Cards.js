import React from "react";
import { Link } from "react-router-dom";


function Cards( {info} ) {
  return (

      <div >
   <img src={info.imgSrc} />
      <h3>{info.titulo}</h3>   
        <div>
        <Link to= {`/Detail/${info.id}`}> Ver más </Link>
        </div>

      </div>
  );
}

export default Cards;