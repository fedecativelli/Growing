import React from 'react';
import './NavBar.css';
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {

    return <>
        <nav className='navBar'>
            <a className="navTitulo" href="/#"> Growing</a>
            <div className="navOpciones">
                <li>
                    <a className="navLinks" href="/#">Inicio </a>
                    <a className="navLinks" href="/#">Productos </a>
                    <a className="navLinks" href="/#">Ayuda </a>
                </li>
            </div>
            <CartWidget />
        </nav>
    </>
}
