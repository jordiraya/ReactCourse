import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    persons: [
      { name: "Pepe", age: "28" },
      { name: "Pipo", age: "29" },
      { name: "Pepo", age: "30" }
    ]
  };
  
  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // DON'T DO THIS: this.state.persons[0].name = 'Pepe'
    // don't mutate the state directly, use setState
    this.setState( {
      persons: [
        { name: newName, age: "28" },
        { name: "Pipo", age: "29" },
        { name: "Pepo", age: "30" }      
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [
        { name: "Pepe", age: "28" },
        { name: event.target.value, age: "29" },
        { name: "Pepo", age: "30" }      
      ]
    });    
  };   

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button onClick={() => this.switchNameHandler('Maximilian')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Maximilianus')}
          changed={this.nameChangedHandler}>My hobbies: racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
