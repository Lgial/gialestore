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
            <li><NavLink to='/'>Inicio</NavLink></li>
            <li><NavLink to='/categoria/skins1'>Skins 1</NavLink></li>
            <li><NavLink to='/categoria/skins2'>Skins 2</NavLink></li>
            <li><img src={Carrito} alt="Carrito"/></li>
        </ul>
    </div>
  )
}

export default Menu;