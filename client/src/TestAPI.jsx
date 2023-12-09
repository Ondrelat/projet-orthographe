import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TestAPI = () => {
    const [message, setMessage] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/dictations')
            .then(response => {
                setMessage(response.data);
            })
            .catch(error => {
                console.error('Erreur lors de la requête:', error);
            });
    }, []);

    return (
        <div>
            Réponse de l'API : {message}
        </div>
    );
};

export default TestAPI;