import React from "react";
import './NavBar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><button className="button">Contact</button></li>
                <li><button className="button">Connexion</button></li>
            </ul>
        </nav>

    );
};

export default Navbar;
