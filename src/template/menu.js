import React from 'react'
import { NavLink } from "react-router-dom";



class Menu extends React.Component{
    render(){
        return (
            <div>
                <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <NavLink className='navbar-brand' to='/'>
                        <i className='fa fa-calendar-check-o'></i>TodoApp
                    </NavLink>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item"><NavLink className="nav-link" to="/todos">Tarefas</NavLink></li>
                            <li className="nav-item"><NavLink className="nav-link" to="/about">Sobre</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu