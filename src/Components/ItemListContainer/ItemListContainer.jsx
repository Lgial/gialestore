import ItemList from '../ItemList/ItemList';
import { products } from '../mock/products';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const {categoriaId} = useParams();

    useEffect(() => {
        const getProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(products);
            }, 1000);
        });
        if(categoriaId) {
            getProductos.then(res => setItems(res.filter(skins1 => skins1.categoria === categoriaId)))
        } else {
            getProductos.then(res => setItems(res))
        }
            
    }, [categoriaId]);

  return (
    <div>
        <ItemList items={items}/>
    </div>
  )
}

export default ItemListContainer;
