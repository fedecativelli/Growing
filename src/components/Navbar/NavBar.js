import React from 'react';
import './NavBar.css';

export const NavBar = () => {
    return <>
        <nav class="navBar">
            <a class="navTitulo" href="#"> Growing</a>
            <div class="navOpciones">
                <a class="navLinks" href="#">Inicio </a>
                <a class="navLinks" href="#">Productos </a>
                <a class="navLinks" href="#">Ayuda </a>
            </div>
        </nav>
    </>
}