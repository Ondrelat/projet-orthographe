import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchAndDisplayHelper = ({ word }) => {
    const [helper, setHelper] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (word) {
            axios.get(`http://localhost:3000/helpers/word/${word}/most-votes`)
                .then(response => {
                    setHelper(response.data.helper);
                    setIsLoading(false)
                    setError(null);
                })
                .catch(error => {
                    console.error('Erreur lors de la récupération de l’aide', error);
                    setError(error);
                    setIsLoading(false);
                });
        }
    }, [word]);

    // Rendu conditionnel en fonction des états
    if (isLoading) {
        return <p>Chargement de l'aide...</p>;
    }
    else if (error) {
        return <p>Erreur lors du chargement de l'aide.</p>;
    }
    else if (helper) {
        return (
            <div className="helper-bubble">
                <h3>{helper.title}</h3>
                {
                    helper.descriptions && Array.isArray(helper.descriptions) && (
                        <ul>
                            {helper.descriptions.map((description, index) => (
                                <li key={index}>
                                    <section
                                        className="not-found-controller"
                                        dangerouslySetInnerHTML={{ __html: description.text }}
                                    />
                                </li>
                            ))}
                        </ul>
                    )
                }
            </div>
        )

    };

};

export default FetchAndDisplayHelper;
