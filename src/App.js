import React from 'react';
import './App.css';
import Students from './students.js';

function App() {
  return (
    <div className="App">
      <Students studentName='Ahmed' />
      <Students studentName='Muneer' />
      <Students studentName='Ali' />

    </div>
  );
}

export default App;