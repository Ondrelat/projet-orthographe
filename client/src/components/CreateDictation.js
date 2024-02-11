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

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: '20px',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9'
    };

    const labelStyle = {
        marginBottom: '10px',
        width: '100%'
    };

    const inputStyle = {
        width: '100%',
        padding: '8px',
        margin: '5px 0 15px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box'
    };

    const textareaStyle = {
        ...inputStyle,
        height: '150px'
    };

    const buttonStyle = {
        width: '100%',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
    };

    return (
        <form onSubmit={handleSubmit} style={formStyle}>
            <label style={labelStyle}>
                Titre:
                <input type="text" value={title} onChange={e => setTitle(e.target.value)} style={inputStyle} />
            </label>
            <label style={labelStyle}>
                Texte:
                <textarea value={text} onChange={e => setText(e.target.value)} style={textareaStyle} />
            </label>
            <label style={labelStyle}>
                Niveau:
                <select value={level} onChange={e => setLevel(e.target.value)} style={inputStyle}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </label>
            <button type="submit" style={buttonStyle}>Soumettre</button>
        </form>

    );
}

export default DictationForm;
