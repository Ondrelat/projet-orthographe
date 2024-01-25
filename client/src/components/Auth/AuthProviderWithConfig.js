// Auth0ProviderWithConfig.js
import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWithConfig = ({ children }) => {
    return (
        <Auth0Provider
            domain="dev-2y3tbv5hpmy6dms1.us.auth0.com"
            clientId="BbBDSMsKuk4OIwE3rlVz9FByJxr43vai"
            redirectUri={window.location.origin} // Remplacez par l'URL de votre serveur local
        >
            {children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithConfig;
