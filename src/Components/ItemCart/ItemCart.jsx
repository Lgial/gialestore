import React from "react";
import { useCartContext } from "../../Context/CartContext";
import './ItemCart.css';



const ItemCart = ({ product }) => {
    const { removeProduct } = useCartContext();
    return (
        <div className='itemCart'>
            <img src={product.imagen} alt={product.nombre} />
            <div>
                <p>Título: {product.nombre}</p>
                <p>Cantidad: {product.cantidad}</p>
                <p>Precio u.: {product.precio}</p>
                <p>Subtotal: ${product.cantidad * product.precio}</p>
                <button onClick={() => removeProduct(product.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default ItemCart