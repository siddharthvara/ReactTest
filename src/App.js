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

  const toggleNameHandler = (event) => {
    setPerson({
      person : [
        {name : event.target.value,age:28},
        {name : 'milan',age:29},
        {name : 'adarsh',age:27}
      ]
    })
  }

  let per = getperson.person.map((res) => {
    return <Person name= {res.name} age = {res.age} change = {toggleNameHandler}></Person>;
  })

  const style = {
    padding: "15px 25px",
    fontSize: "24px",
    textAlign: "center",
    cursor: "pointer",
    outline: "none",
    color: "#fff",
    backgroundColor: "#4CAF50",
    border: "none",
    borderRadius: "15px",
    boxShadow: "0 9px #999"
  };

  return (
    <div className="App">
      <h1>My First React App</h1>
      <button style= {style} onClick = {changeNameHandler} >Switch Name</button>
      { per }
    </div>
  );
}

export default App;
