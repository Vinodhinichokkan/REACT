import React, {Component} from 'react';
import logo from './logo.svg'
import'./App.css';
import MyComponent from './Components/Greet'
import Hello from './Components/Hello';

class App extends Component {
  render(){
    return (
      <div className='App'>
        <MyComponent />
        <Greet />
        <Hello />
      </div>
    );
      
  }
}
 

export default App

