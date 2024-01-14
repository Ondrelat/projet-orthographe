import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import FetchAndDisplayHelper from './Helper';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';
import './Helper.css';

const Dictation = () => {

    // Mot à taper
    const [sentence, setSentence] = useState('');
    const [title, setTitle] = useState('');

    const words = sentence.split(' ');

    const [wordError, setWordError] = useState('');
    const [correctWords, setCorrectWords] = useState([]);

    const [stateWordInput, setStateWordInput] = useState('Changing');
    //const [isLastInputCorrect, setIsLastInputCorrect] = useState(true);
    // Saisie de l'utilisateur
    const [userInput, setUserInput] = useState('');
    // La dernière saisie utilisateur pour détecter qu'il essaie de changer quelque chose
    const [prevInput, setPrevInput] = useState('');

    // URL de l'audio de la dictée
    const [audioUrl, setAudioUrl] = useState('');
    const [pauseTime, setPauseTime] = useState(0); // Initialisation de pauseTime à 0
    const audioRef = useRef(null);
    const [currentAudioIndex, setCurrentAudioIndex] = useState(1);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    }, [currentAudioIndex]);

    const fetchDictationAudio = async (difficultyLevel) => {
        try {
            //const response = await axios.get(`http://localhost:3000/dictations/randomDictation/${difficultyLevel}`);
            const response = await axios.get(`http://localhost:3000/dictations/7`);
            setAudioUrl(response.data.audioURL); // Remplacer 'audioURL' par le nom de la propriété appropriée
            setSentence(response.data.text);
            setTitle(response.data.title);
            // Reste de la logique pour mettre à jour l'état avec la dictée reçue
        } catch (error) {
            console.error('Erreur lors de la récupération de la dictée', error);
        }
    };

    //hook qui permet d'attendre que tout le rendu est construit pour se lancer
    useEffect(() => {
        fetchDictationAudio(1);
    }, []);

    const handleInputChange = (e) => {
        const newValue = e.target.value;

        // Réinitialiser la couleur si l'utilisateur commence à modifier le mot
        if (newValue !== prevInput) {
            setStateWordInput("Changing");
        }

        setUserInput(newValue);
    };

    const handleKeyUp = (e) => {
        if (e.key === ' ' || e.keyCode === 32) {
            // La logique à exécuter lorsque la touche Espace est pressée
            const currentWord = words[correctWords.length];

            // Si mon mot est correct
            if (userInput.trim().toLowerCase() === currentWord.toLowerCase()) {
                setCorrectWords([...correctWords, currentWord]); // On va au prochain mot à completer
                setUserInput(''); // Réinitialiser l'entrée pour le prochain mot

                //Si un mot a été écrit faux et que l'audio est en pause on repart quelque seconde avant
                if (stateWordInput === "inCorrect" && audioRef.current && audioRef.current.paused) {
                    // Reprendre 3 secondes avant si possible
                    audioRef.current.currentTime = Math.max(0, pauseTime - 3);
                    audioRef.current.play();
                }

                nextAudio();

                setStateWordInput("correct");//Pour enlever le fait que les l'input soient en rouge
                if (correctWords.length + 1 === words.length) {
                    console.log('Complete sentence typed correctly');
                }
            }
            else {
                console.log('Mot incorrect');

                setStateWordInput("inCorrect");

                //Si le mot est faux je met en pause la dictée
                setPauseTime(audioRef.current.currentTime);
                audioRef.current.pause();

                setWordError(words[correctWords.length]);
            }
        }
        setPrevInput(userInput);
    };

    const nextAudio = () => {
        const lastChar = userInput.slice(-1);
        const secondLastChar = userInput.slice(-2, -1);

        // Chaque fois que l'utilisateur appuie sur une ponctuation on va à la prochaine partie d'audio
        if ([".", "!", "?", ",", ";", ":"].includes(secondLastChar) && lastChar === " ") {
            setCurrentAudioIndex(currentIndex => currentIndex + 1);
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <section className="App-body">
                {/* Afficher l'audio si l'URL est disponible */}
                {audioUrl && <audio src={audioUrl + "\\" + title + "_partie_" + currentAudioIndex + ".mp3"} controls ref={audioRef} />}

                {/* Affichage de ce que tu tapes et de si c'est juste ou incorrect */}
                <p>
                    <span style={{ color: 'green' }}>{correctWords.join(' ')}</span>&nbsp;
                    <span style={{
                        color: stateWordInput === 'correct' ? 'green' :
                            stateWordInput === 'inCorrect' ? 'red' :
                                'white'
                    }}>
                        {userInput}
                    </span>
                </p>

                {/* Zone pour écrire */}
                <div className="ZoneInputAndHelp">
                    <input
                        type="text"
                        value={userInput}
                        onChange={handleInputChange}
                        onKeyUp={handleKeyUp}
                        placeholder="Ecrire la dictée ici"
                    />

                    {/* Aide */}
                    {stateWordInput === 'inCorrect' && <FetchAndDisplayHelper word={wordError} />}
                </div>

                {/*<p> sentence</p> */}

                <Link to="/create-dictation">
                    <button>Créer une Dictée</button>
                </Link>
            </section>
        </div>
    );
}

export default Dictation;
