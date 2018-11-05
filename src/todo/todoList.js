import React from 'react'

class TodoList extends React.Component{
    
    constructor(props){
        super(props)

    }

    renderRow(){
        return (
            this.props.list.map(todo => (
                <tr key={todo._id}>
                    <td>{todo.description}</td>
                </tr>
            ))
        )
    }

    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Decrição</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </table>
        );
    }
}

export default TodoList