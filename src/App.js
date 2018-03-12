import React, { Component } from 'react'
import './App.css';
import Person from './Person/Person';

class App extends Component {
    
    state = {
        persons: [
            { id: 1, name: 'Miguel Josephino', age: 37 },
            { id: 2, name: 'Julie Shepherd', age: 59 },
            { id: 3, name: 'Frank Vogul', age: 28 }
        ],
        otherstate: 'some other state value',
        showPersons: false
    }
    
    nameChangedHandler = ( event, id ) => {
         
         const personIndex = this.state.persons.findIndex(p => {
             return p.id === id;
         });
        
        const person = {...this.state.persons[personIndex]};
        
        person.name = event.target.value;
        
        const persons = [...this.state.persons];
        persons[personIndex] = person;
        
        this.setState( { persons: persons } )
    }
    
    deletePersonHandler = ( personIndex ) => {
        //const persons = this.state.persons.slice(); Same function as below
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState( { persons: persons } )
    }
    
    togglePersonHandler = ( event ) => {
        const doesShow = this.state.showPersons;
        this.setState( { showPersons: !doesShow } );    
    }
    
    render() {
        
        let persons = null;
        
        if (this.state.showPersons) {
            persons = (
                <div >
                    {this.state.persons.map( ( person, index ) => {
                        return <Person 
                                click={ () => this.deletePersonHandler( index ) }
                                name={ person.name } 
                                age={ person.age }
                                key={ person.id } 
                                changed={ (event) => this.nameChangedHandler(event, person.id) }
                            />  
                                                      
                    })}
                </div>
            );
        }
        
        return (
          <div className="App">
            <h1>React Sandbox</h1>
            <button className="ToggleButton" 
                    onClick={ this.togglePersonHandler } >
                    Toggle People
            </button>
            {persons}
          </div>
        );
  }
}

export default App;
