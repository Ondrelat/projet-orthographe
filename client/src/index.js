// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Auth0ProviderWithConfig from './components/Auth/AuthProviderWithConfig'; // Importation de Auth0ProviderWithConfig

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0ProviderWithConfig> {/* Enveloppez App avec Auth0ProviderWithConfig */}
      <App />
    </Auth0ProviderWithConfig>
  </React.StrictMode>
);

reportWebVitals();