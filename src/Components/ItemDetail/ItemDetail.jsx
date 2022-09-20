import React from 'react';
import ItemCount from '../ItemCount/ItemCount'

const ItemDetail = ({ item }) => {

    return (
        <div className="detail">
            <img src={item.imagen} alt={item.nombre} />
            <div className="infoDetail">
                <h2>{item.nombre}</h2>
                <p>
                    Lista de venta skins en CS:GO 
                    Lista de venta skins en CS:GO
                    Lista de venta skins en CS:GO
                    Lista de venta skins en CS:GO
                </p>
                <h3>${item.precio}.-</h3>

                <ItemCount stock={10} initial={1}/>
            </div>
        </div>
    );
};

export default ItemDetail;