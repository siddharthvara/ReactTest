import React from 'react';
import './App.css';
import Person from './Person/person';

function App() {
  return (
    <div className="App">
      <h1>My First React App</h1>
      <Person name="siddharth"></Person>
      <Person name="milan"></Person>
    </div>
  );
}

export default App;
