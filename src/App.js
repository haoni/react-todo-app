import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'

import './template/todo.css';

import Todo from  './todo/todo.js' 
import About from './about/about.js'
import Menu from './template/menu.js'

class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Menu/>
          <div className="container">       
            <Route exact path="/" component={Todo} />
            <Route path="/todos" component={Todo} />
            <Route path="/about" component={About} />
          </div>
        </React.Fragment>
      </Router>
    );
  }
}

export default App; 