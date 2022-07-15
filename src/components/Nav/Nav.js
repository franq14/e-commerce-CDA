import React from 'react';
import s from './Nav.module.css';
import carrito from '../../assets/cart.svg';

const Nav = ({ isInHedaer, prueba }) => {
    return (
        <nav className={isInHedaer ? s.nav : s.navFooter}>
            <h2>CDA</h2>
            <ul>
                <li onClick={prueba}>{isInHedaer ? 'Remeras' : 'Instagram'}</li>
                <li>{isInHedaer ? 'Camisas' : 'Facebok'}</li>
                <li>{isInHedaer ? 'Gorras' : 'Linkedin'}</li>
            </ul>
            <img src={isInHedaer ? carrito : 'logo192.png'} alt="logo" />
        </nav>
    );
};

export default Nav;