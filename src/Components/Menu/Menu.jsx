import React from 'react'
import "./Menu.css";
import Carrito from '../../Assets/Carrito.png'
import logo from '../../Assets/logo.png'

 const Menu = () => {
  return (
    <div className='contenedor-menu'>
        <h1>gialE's</h1>
        <figure><img className='logo' src={logo} alt="" /></figure>
        <ul>
            <a href="#"><li>Nosotros</li></a>
            <a href="#"><li>Productos</li></a>
            <a href="#"><li>Carrito</li></a>
            <a href="#"><li ><img src={Carrito} alt="Carrito" /></li></a>
        </ul>
    </div>
  )
}

export default Menu;