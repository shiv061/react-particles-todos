import React from 'react';
import './App.css';
import Particle from './components/particle';
import TextField from './components/textField';

function App() {
  return (
    <div className='App'>
      <Particle />
      <div className='container'>
        <h1 className='white-text'>todos</h1>
      </div>
      <div className='container'>
        <TextField />
      </div>
    </div>
  );
}

export default App;
