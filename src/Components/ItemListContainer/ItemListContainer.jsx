import ItemList from '../ItemList/ItemList';
import { products } from '../mock/products';

import { useEffect, useState } from 'react';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {

        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 2000);
        });

        getProductos.then((res) => {
            setItems(res);
        });
    }, []);


    

  return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer;
