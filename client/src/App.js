import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  // Mot à taper
  const [sentence, setSentence] = useState('');

  const words = sentence.split(' ');

  const [correctWords, setCorrectWords] = useState([]);

  const [isCurrentInputCorrect, setIsCurrentInputCorrect] = useState(true);

  // Saisie de l'utilisateur
  const [userInput, setUserInput] = useState('');

  // La dernière saisie utilisateur pour détecter qu'il essaie de changer quelque chose
  const [prevInput, setPrevInput] = useState('');

  // URL de l'audio de la dictée
  const [audioUrl, setAudioUrl] = useState('');
  const [rule, setRule] = useState('');   //Helper

  const fetchDictationAudio = async (difficultyLevel) => {
    try {
      const response = await axios.get(`http://localhost:3000/dictations/randomDictation/${difficultyLevel}`);
      setAudioUrl(response.data.audioURL); // Remplacer 'audioURL' par le nom de la propriété appropriée
      setSentence(response.data.text);
      // Reste de la logique pour mettre à jour l'état avec la dictée reçue
    } catch (error) {
      console.error('Erreur lors de la récupération de la dictée', error);
    }
  };

  //hook qui permet d'attendre que tout le rendu est construit pour se lancer
  useEffect(() => {
    fetchDictationAudio(1);
  }, []);

  const fetchHelperForWord = async (word) => {
    try {
      const response = await axios.get(`http://localhost:3000/helper/word/${word}/most-votes`);
      const helperData = response.data;
      setRule(helperData.description);
      // Utilisez ici les données obtenues pour afficher l'aide ou la suggestion
      console.log(helperData); // Par exemple, afficher les données dans la console
    } catch (error) {
      console.error('Erreur lors de la récupération de l’aide', error);
    }
  };

  const handleInputChange = (e) => {
    const newValue = e.target.value;

    // Réinitialiser la couleur si l'utilisateur commence à modifier le mot
    if (newValue !== prevInput) {
      setIsCurrentInputCorrect(true);
    }

    setUserInput(newValue);
  };

  const handleKeyUp = (e) => {
    if (e.key === ' ' || e.keyCode === 32) {
      // La logique à exécuter lorsque la touche Espace est pressée
      const currentWord = words[correctWords.length];

      if (userInput.trim().toLowerCase() === currentWord.toLowerCase()) {
        setCorrectWords([...correctWords, currentWord]);
        setUserInput(''); // Réinitialiser l'entrée pour le prochain mot
        setRule(''); // Effacer la règle
        setIsCurrentInputCorrect(true);//Pour enlever le fait que les l'input soient en rouge
        if (correctWords.length + 1 === words.length) {
          console.log('Complete sentence typed correctly');
        }
      } else {
        console.log('Mot incorrect');
        setIsCurrentInputCorrect(false);
        fetchHelperForWord(currentWord);
      }
    }
    setPrevInput(userInput);
  };

  return (
    <div className="App">
      <header className="App-header">

        <p>Le mot à taper est : {sentence}</p>
        <p>Mots corrects :&nbsp;
          <span style={{ color: 'green' }}>{correctWords.join(' ')}</span>&nbsp;
          <span style={{ color: isCurrentInputCorrect ? 'inherit' : 'red' }}>
            {userInput}
          </span></p>
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
