import './Item.css';
import { Link } from 'react-router-dom';
import React from 'react';

const Item = ({id, nombre, imagen, precio}) => {
  return (
      <div className="card">
        <Link to={`/detalle/${id}`}>Epic
          <img src={imagen} className="card-img-top" alt={nombre} />
          <div className="card-body">
              <h5 className="card-title text-center"><b>{nombre}</b></h5>
              <p className="card-text text-center">${precio}</p>
          </div>
          </Link>
      </div>
  )
}

export default Item;