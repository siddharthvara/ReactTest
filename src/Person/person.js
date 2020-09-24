import React from 'react';
import './person.css';

const Person = (props) => {
    return (
    <div className="person">
        <h1>custom component created by { props.name } and Age: { props.age }</h1>
        <input type='text' onChange={props.change} value={ props.name }/>
    </div>
    );
}

export default Person;