import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dictation from './components/Dictation';
import CreateDictation from './components/CreateDictation';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Dictation />} />
        <Route path="/create-dictation" element={<CreateDictation />} />
      </Routes>
    </Router>
  );
};

export default App;