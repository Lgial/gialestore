import React from 'react'
import "./Navbar.css";
import Carrito from '../../Assets/Carrito.png'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom';

 const Menu = () => {
  return (
    <div className='contenedor-menu'>
        <h1>gialE's</h1>
        <figure><img className='logo' src={logo} alt="" /></figure>
        <ul>
            <NavLink className="nav_link" to='/'><li>Inicio</li></NavLink>
            <NavLink className="nav_link" to='/categoria'><li>Skins 1</li></NavLink>
            <NavLink className="nav_link" to='/categoria'><li>Skins 2</li></NavLink>
            <NavLink className="nav_link" to='/cart'><li><img src={Carrito} alt="Carrito" /></li></NavLink>
        </ul>
    </div>
  )
}

export default Menu;