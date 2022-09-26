import React, {useState} from 'react';
import { useCartContext } from '../../Context/CartContext';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {
    const [goCart, setGoCart] = useState(false);

    const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        setGoCart(cantidad);
        addProduct(item, cantidad)
    }

    return (
        <div className="detail">
            <img src={item.imagen} alt='' />
            <div className="infoDetail">
                <h2>{item.nombre}</h2>
                <p>
                    Lista de venta skins en CS:GO 
                </p>
                <h3>${item.precio}.</h3>
                {
                    goCart
                    ? <Link to='/cart'>Terminar compra</Link>
                    :<ItemCount stock={10} initial={1} onAdd={onAdd}/>
                }
            </div>
        </div>
    );
};

export default ItemDetail;