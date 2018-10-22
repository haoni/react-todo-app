import React from 'react'


class Menu extends React.Component{
    render(){
        return (
            <div>
                <div className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                    <a className='navbar-brand' href='#'>
                        <i className='fa fa-calendar-check-o'></i>TodoApp
                    </a>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active"><a className="nav-link" href="#/todos">Tarefas</a></li>
                            <li className="nav-item"><a className="nav-link" href="#/about">Sobre</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu

{

            // <nav className='navbar navbar-inverse bg-inverse'>
            //     <div className='container'>
            //         <div className='navbar-header'>
            //             <a className='navbar-brand' href='#'>
            //                 <i className='fa fa-calendar-check-o'></i>TodoApp
            //             </a>
            //         </div>
            //         <div id='navbar' className='navbar-collapse collapse'>
            //             <ul className='nav navbar-nav'>
            //                 <li><a href='#/todos'>Tarefas</a></li>
            //                 <li><a href='#/about'>Sobre</a></li>
            //             </ul>
            //         </div>
            //     </div>
            // </nav>
}