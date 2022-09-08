import './Item.css';
import React from 'react';

 const Item = ({data}) => {
  return (
        <a href="" className='skin'>
            <img src={data.image} alt="" />
            <p>{data.title}</p>
        </a>
  )
}

export default Item;