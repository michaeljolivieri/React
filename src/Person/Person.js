import React, { Component } from 'react';


const person = (props) => {
    return (
        <p>My name is {props.name} and I'm {props.age} years old</p>
        <p>{props.habbits}</p>
    )
};

export default person