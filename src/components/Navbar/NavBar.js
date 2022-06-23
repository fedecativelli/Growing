import React from 'react';
import './NavBar.css';
import { CartWidget } from "./CartWidget/CartWidget";

export const NavBar = () => {

    return <>
        <header className="header-container">

            <h2>Growing</h2>
            <nav className="nav-container">
                <ul>
                    <li>
                        <a href="/">Carpas </a>
                    </li>
                    <li>
                        <a href="/">Macetas </a>
                    </li>
                    <li>
                        <a href="/">Luces </a>
                    </li>
                </ul>
            </nav>

            <CartWidget />

        </header>
    </>
}
