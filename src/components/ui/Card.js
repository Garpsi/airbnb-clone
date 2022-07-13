import React from 'react';
import { Link } from 'react-router-dom'

const Card = ({ src, title, description, price }) => {
  return (
    <Link to='/search'>
      <div className='card'>
        <img src={src} alt="" />
        <div className="card__info">
          <h2>{title}</h2>
          <h4>{description}</h4>
          <h3>{price}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;
