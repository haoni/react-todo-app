import React from 'react'
import { Route, Router, Redirect, hashHistory } from 'react-router'

import Todo from '/todo/todo.js'
import About from '/about/about.js'

class Routes extends React.Component {
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/todos' Component={Todo} />
                <Route path='/about' Component={About} />

                <Redirect from="*" to='/todos'/>
            </Router>
        );
    }
}

export default Routes