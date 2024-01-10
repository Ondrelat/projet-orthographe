import React from "react";

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <ul style={{
                listStyleType: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                justifyContent: 'flex-end'
            }}>
                <li style={{ marginRight: '20px' }}>Contact</li>
                <li>Connexion</li>
            </ul>
        </nav>

    );
};

export default Navbar;
