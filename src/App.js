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

  let per = getperson.person.map((res) => {
    return <Person name= {res.name} age = {res.age}></Person>;
  })

  return (
    <div className="App">
      <h1>My First React App</h1>
      <button onClick = {changeNameHandler} >Switch Name</button>
      { per }
    </div>
  );
}

export default App;
