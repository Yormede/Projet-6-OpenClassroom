import React, { useState } from 'react';
import './_header.scss'
import { NavLink } from 'react-router-dom';
import logo from "../../images/LOGO.svg";

const Header = () => {

    return (
        <header>
            <img src={logo} alt='Logo de Kasa'/>
            <nav>
                <ul>
                    <NavLink to="/"><li>Accueil</li></NavLink>
                    <NavLink to="About"><li >A propos</li></NavLink>
                </ul>
            </nav>
        </header>
    );
};

export default Header;