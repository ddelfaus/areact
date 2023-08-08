import logo from './logo.svg';
import './App.css';
import FooComponent from './FooComponent';
import FunComponent from './FunComponet';
import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      welcomeMessage: "derp"
    }
  }

  render(){
    return (
      <div className="App">
        <FooComponent message ={this.state.welcomeMessage}/>
        <FunComponent message ={this.state.welcomeMessage}/>
      </div>
    );
  }
}


export default App;
