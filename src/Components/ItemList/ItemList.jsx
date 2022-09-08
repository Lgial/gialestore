import Item from '../Item';
import React from 'react';

 const ItemList = ({data = []}) => {
  return (
    data.map(skin => <Item key={skin.id} data={skin}/>)
  )
}

export default ItemList;