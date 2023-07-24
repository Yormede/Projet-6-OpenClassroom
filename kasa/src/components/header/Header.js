import React, { useState } from 'react';
import './_header.scss'
import { Link } from 'react-router-dom';
import logo from "../../images/LOGO.svg";

const Header = () => {

    return (
        <header>
            <img src={logo} alt='Logo de Kasa'/>
            <nav>
                <ul>
                    <Link to="/"><li>Accueil</li></Link>
                    <Link to="About"><li >A propos</li></Link>
                </ul>
            </nav>
        </header>
    );
};

export default Header;