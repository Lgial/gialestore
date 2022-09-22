import React, {useState} from 'react';
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'


const ItemDetail = ({ item }) => {

    const [goCart, setGoCart] = useState(false);

    const onAdd = (cantidad) => {
        setGoCart(true);
    }

    return (
        <div className="detail">
            <img src={item.imagen} alt='' />
            <div className="infoDetail">
                <h2>{item.nombre}</h2>
                <p>
                    Lista de venta skins en CS:GO 
                    Lista de venta skins en CS:GO
                    Lista de venta skins en CS:GO
                    Lista de venta skins en CS:GO
                </p>
                <h3>${item.precio}.-</h3>
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