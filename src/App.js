import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    
    state = {
        persons: [
            { name: 'Myko', age: 37},
            { name: 'Juliel Lynn', age: 27},
            { name: 'Kylor Melton', age: 28}
        ]
    }
    
    switchNameHandler = () => {
        this.setState({
            persons: [
                { name: 'Michael Joesph Olivieri', age: 37},
                { name: 'Julie Lynn Bisig', age: 59},
                { name: 'Forrest Kylor Melton', age: 28}
            ]
        })
    }
    
    render() {
        return (
          <div className="App">
            <h1>MO</h1>
            <button onClick={this.switchNameHandler} >Switch Name</button>
            <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />    
            <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />    
            <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />    
                
            
          </div>
        );
  }
}

export default App;
