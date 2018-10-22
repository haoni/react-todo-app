import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

// import Todo from  './todo/todo.js' 
// import About from './about/about.js'
import Menu from './template/menu.js'
import Routes from './routes.js'

class App extends Component {
  render() {
    return (
      <div className="container">       
        <Menu/>
        <Routes/>          
      </div>
    );
  }
}

export default App;