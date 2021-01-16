import React from 'react';
import './App.css';
import Person from './Basicinfo';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: [{ name: 'Torren Spann-Bell', age: 21, dob: 'Jan 8, 2000' }, { name: 'Chad Harris', age: 18, dob: 'Sept 25, 2002' },
      { name: 'Shane Bell', age: 19, dob: 'Feb 23, 1997' }]
    };
  }

  render() {
    return (
      
      <div className="App">

        <h1>Info</h1>
        <div className='Cards'>
          <Person name={this.state.person[0].name} age={this.state.person[0].age} dob={this.state.person[0].dob}/>
          <Person name={this.state.person[1].name} age={this.state.person[1].age} dob={this.state.person[1].dob}/>
          <Person name={this.state.person[2].name} age={this.state.person[2].age} dob={this.state.person[2].dob}/>
        </div>
      </div>

    )
  }
}
export default App;
