import React, { useState } from 'react';
import './App.css';
import Person from './Person/person';

function App() {

  const [getperson,setPerson] = useState({
    person : [
      {name : 'siddharth',age:28},
      {name : 'milan',age:29},
      {name : 'adarsh',age:27}
    ]
  }); 

  const changeNameHandler = () => {
    setPerson({
      person : [
        {name : 'siddharth 2',age:30},
        {name : 'milan',age:29},
        {name : 'adarsh 3',age:28}
      ]
    })
  }

  return (
    <div className="App">
      <h1>My First React App</h1>
      <button onClick = {changeNameHandler} >Switch Name</button>
      <Person name= {getperson.person[0].name} age = {getperson.person[0].age}></Person>
      <Person name= {getperson.person[1].name} age = {getperson.person[1].age}></Person>
      <Person name= {getperson.person[2].name} age = {getperson.person[2].age}></Person>
    </div>
  );
}

export default App;
