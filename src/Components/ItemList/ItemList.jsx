import Item from '../Item/Item';
import './ItemList.css'
import React from 'react';

const ItemList = ({items}) => {
  return (
      <div className="row">
          {items.map(item => (
              <div key={item} className="col-md-4 py-3">
                  <Item id={item.id} nombre={item.nombre} imagen={item.imagen} precio={item.precio} />
              </div>)
          )}
      </div>
  )
}

export default ItemList;