// DictationForm.js
import React, { useState } from 'react';

function DictationForm() {
    const [title, setTitle] = useState('');
    const [text, setText] = useState('');
    const [level, setLevel] = useState('1');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Logique d'envoi de la requête POST
        try {
            const response = await fetch('http://localhost:3000/dictations/createDictation/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, text, level }),
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            // Traitement de la réponse ici...
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire: ", error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Titre:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
            </label>
            <label>
                Texte:
                <textarea value={text} onChange={e => setText(e.target.value)} />
            </label>
            <label>
                Niveau:
                <select value={level} onChange={e => setLevel(e.target.value)}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit">Soumettre</button>
        </form>
    );
}

export default DictationForm;
