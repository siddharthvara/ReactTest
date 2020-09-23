import React from 'react';

const Person = (props) => {
    return (
    <h1>custom component created by { props.name } and Age: { props.age }</h1>
    );
}

export default Person;