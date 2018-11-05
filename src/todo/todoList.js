import React from 'react'
import { Table, ButtonToolbar } from 'react-bootstrap'
import IconButton from '../template/iconButton';

class TodoList extends React.Component{
    
    constructor(props){
        super(props)

    }

    renderRow(){
        return (
            this.props.list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done? "col-md-6 markedAsDone": "col-md-7"}  >{todo.description}</td>
                    <td className="col-md-6">
                    <ButtonToolbar>
                        <IconButton style="success" icon="check" onClick={() => this.props.doneOnClick(todo)}></IconButton>
                        <IconButton style="warning" icon="undo" onClick={() => this.props.undoneOnClick(todo)}></IconButton>
                        <IconButton style="danger" icon="trash" onClick={() => this.props.deleteOnClick(todo._id)}></IconButton>
                    </ButtonToolbar>
                    </td>
                </tr>
            ))
        )
    }

    render(){
        return(
            <Table responsive>
                <thead>
                    <tr>
                        <th className="col-md-6">Decrição</th>
                        <th className="col-md-6">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {this.renderRow()}
                </tbody>
            </Table>
        );
    }
}

export default TodoList