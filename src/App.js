import React, {Component} from 'react';
import logo from './logo.svg'
import'./App.css';
import MyComponent from './Components/Greet'

class App extends Component {
  render(){
    return (
      <div className='App'>
        <MyComponent />
        <Greet />
      </div>
    );
      
  }
}
 

export default App

