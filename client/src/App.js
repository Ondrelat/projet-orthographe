import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Mot à taper
  const [sentence, setSentence] = useState('');
  const words = sentence.split(' ');

  const [correctWords, setCorrectWords] = useState([]);

  // Saisie de l'utilisateur
  const [userInput, setUserInput] = useState('');
  // URL de l'audio de la dictée
  const [audioUrl, setAudioUrl] = useState('');
  const [rule, setRule] = useState('');   //Helper

  // Fonction pour récupérer l'audio de la dictée
  const fetchDictationAudio = async () => {
    try {
      const response = await axios.get('http://localhost:3000/dictations/1');
      // Met à jour l'URL de l'audio
      setAudioUrl(response.data.audioURL); // Remplacer 'audioURL' par le nom de la propriété appropriée
      setSentence(response.data.text);
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'audio', error);
    }
  };

  useEffect(() => {
    fetchDictationAudio();
  }, []);

  const fetchHelperForWord = async (word) => {
    try {
      const response = await axios.get(`http://localhost:3000/helper/${word}`);
      const helperData = response.data;
      setRule(helperData.rule);
      // Utilisez ici les données obtenues pour afficher l'aide ou la suggestion
      console.log(helperData); // Par exemple, afficher les données dans la console
    } catch (error) {
      console.error('Erreur lors de la récupération de l’aide', error);
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.keyCode === 32) {
      // La logique à exécuter lorsque la touche Espace est pressée
      const currentWord = words[correctWords.length];

      if (userInput.trim().toLowerCase() === currentWord.toLowerCase()) {
        setCorrectWords([...correctWords, currentWord]);
        setUserInput(''); // Réinitialiser l'entrée pour le prochain mot
        setRule(''); // Effacer la règle
        if (correctWords.length + 1 === words.length) {
          console.log('Complete sentence typed correctly');
        }
      } else {
        console.log('Mot incorrect');
        fetchHelperForWord(currentWord);
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>Le mot à taper est : {sentence}</p>
        <p>Mots corrects : {correctWords.join(' ')}</p>
        <input
          type="text"
          value={userInput}
          onChange={handleInputChange}
          onKeyUp={handleKeyUp}
          placeholder="Tapez le mot ici"
        />
        {rule && <div className="info-bulle">{rule}</div>}
        {/* Afficher l'audio si l'URL est disponible */}
        {audioUrl && <audio src={audioUrl} controls />}

      </header>
    </div>
  );
}

export default App;
