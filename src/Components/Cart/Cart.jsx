import { addDoc, collection, getFirestore} from 'firebase/firestore';
import React from 'react';
import {Link } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import ItemCart from '../ItemCart/ItemCart';

  const Cart = () => {
    const { cart, totalPrice } = useCartContext();
  
    const order = {
      buyer: {
        name: "Leandro",
        email: "leandrogiardellinicolas@gmail.com",
        phone: "156698523",
        address: "Avenida siempre viva 728",
      },
      items: cart.map((product) => ({
        id: product.id,
        title: product.nombre,
        price: product.precio,
        quantity: product.cantidad,
      })),
      total: totalPrice(),
    };
  
    const handleClick = () => {
      const db = getFirestore();
      const ordersCollection = collection(db, "orders");
      addDoc(ordersCollection, order).then(({ id }) => console.log(id));
    };
  
    if (cart.length === 0) {
      return (
        <>
          <p>No hay elementos en el carrito</p>
          <Link to="/">Hacer compras</Link>
        </>
      );
    }
  
    return (
      <>
        {cart.map((product) => (
          <ItemCart key={product.id} product={product} />
        ))}
        <p>total: {totalPrice()}</p>
        <button onClick={handleClick}>Emitir compra</button>
      </>
    );
  };
  

export default Cart