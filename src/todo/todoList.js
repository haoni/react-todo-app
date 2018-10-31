import React from 'react'

class TodoList extends React.Component{
    
    constructor(props){
        super(props)

        this.state = { list: this.props.list || [] }

        console.log('Como está o props do componente TodoList:')
        console.log(this.props)
    }

    renderRow(){


        return (
            this.state.list.map(todo => (
                <tr>
                    <td>{todo.description}</td>
                </tr>
            ))
        )
    }

    render(){
        console.log('TodoList: Eu!')

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