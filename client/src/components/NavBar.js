import React from "react";

const Navbar = () => {
    return (
        <nav style={{
            backgroundColor: 'white',
            color: 'black',
            padding: '10px',
            textAlign: 'center',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}>
            <ul style={{ listStyleType: 'none', margin: 0, padding: 0 }}>
                <li style={{ display: 'inline', marginRight: '20px' }}>Accueil</li>
                <li style={{ display: 'inline', marginRight: '20px' }}>À propos</li>
                <li style={{ display: 'inline', marginRight: '20px' }}>Services</li>
                <li style={{ display: 'inline' }}>Contact</li>
            </ul>
        </nav>
    );
};

export default Navbar;
