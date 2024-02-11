import React from "react";
import './NavBar.css';
import Login from './Auth/Login';
import Logout from './Auth/Logout';
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
    const { user, isAuthenticated } = useAuth0();
    return (
        <nav className="navbar">
            <ul className="nav-list">
                <li className="nav-item"><button className="button">Contact</button></li>
                {isAuthenticated ? <li className="nav-item"><Logout /></li> : <li className="nav-item"><Login /></li>}
                {isAuthenticated ? <img className="round-image" src={user.picture} alt={user.name} /> : <></>}

            </ul>
        </nav>
    );
};

export default Navbar;
