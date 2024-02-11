// Auth0ProviderWithConfig.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithConfig = ({ children }) => {
<<<<<<< HEAD
    const AuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
    const AuthClientID = process.env.REACT_APP_CLIENT_ID;


=======
    const AuthDomain = process.env.REACT_APP_DOMAIN;
    const AuthClientID = process.env.REACT_APP_CLIENT_ID;

>>>>>>> 95d518fa73bd8dab1c697c00573348928ad04a7e
    return (
        <Auth0Provider
            domain={AuthDomain}
            clientId={AuthClientID}
<<<<<<< HEAD
            redirectUri={window.location.origin}
            audience="Projet-Orthographe Nest React"
            scope="openid profile email"
=======
            redirectUri={window.location.origin} // Remplacez par l'URL de votre serveur local
>>>>>>> 95d518fa73bd8dab1c697c00573348928ad04a7e
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithConfig;
