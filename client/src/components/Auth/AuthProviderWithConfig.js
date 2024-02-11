// Auth0ProviderWithConfig.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithConfig = ({ children }) => {
    const AuthDomain = process.env.REACT_APP_AUTH_DOMAIN;
    const AuthClientID = process.env.REACT_APP_CLIENT_ID;


    return (
        <Auth0Provider
            domain={AuthDomain}
            clientId={AuthClientID}
            redirectUri={window.location.origin}
            audience="Projet-Orthographe Nest React"
            scope="openid profile email"
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithConfig;
