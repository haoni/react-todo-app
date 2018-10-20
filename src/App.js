import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'

import Todo from  './todo/todo.js' 
import About from './about/about.js'
import Menu from './template/menu.js'

class App extends Component {
  render() {
    return (
      <div className="container">       
        <Menu/>
        <Todo/>
        <About/>
          
      </div>
    );
  }
}

export default App;