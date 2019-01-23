import React from 'react'
import { Table, ButtonToolbar, Button, ButtonGroup } from 'react-bootstrap'
// import IconButton from '../template/iconButton';

class TodoList extends React.Component{
    
    constructor(props){
        super(props)

    }

    renderRow(){
        return (
            this.props.list.map(todo => (
                <tr key={todo._id}>
                    <td className={todo.done? "markedAsDone" : ""}  >{todo.description}</td>
                    <td>
                        <Button style={{display: !todo.done?"inline-block":"none"}} bsStyle="success" onClick={() => this.props.doneOnClick(todo)}><i className="fa fa-check"></i></Button>
                        <Button style={{display: todo.done?"inline-block":"none"}} bsStyle="warning" onClick={() => this.props.undoneOnClick(todo)}><i className="fa fa-reply"></i></Button>
                        <Button style={{display: todo.done?"inline-block":"none"}} bsStyle="danger"  onClick={() => this.props.deleteOnClick(todo._id)}><i className="fa fa-trash" /></Button>
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
                        <th>Decrição</th>
                        <th width="15%">Ações</th>
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