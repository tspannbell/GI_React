// This is a component for basic information.
import React from 'react';

const person = (props) => {
    return (
        <div className='Cards'>
            <p> My name is {props.name} I am {props.age} and I was born  {props.dob}.</p>
        </div>
    )
}

export default person;