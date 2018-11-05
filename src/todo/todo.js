import React, {Component} from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL= "http://localhost:3003/api/todos"

 class Todo extends Component {
     constructor(props){
        super(props)

        this.state = { loading: false, description: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.tarefaOnChange = this.tarefaOnChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUndone = this.handleUndone.bind(this)
        this.handleDone = this.handleDone.bind(this)

        this.refresh()
     }

     tarefaOnChange(e) {
        this.setState({description: e.target.value })
     }

    async refresh(){
         try {

            //Tanto o bloco comentado quanto o bloco de código 
            // abaixo não comentado não estão limpando o campo description.

            // const response = await axios.get(`${URL}?sort=-creatdAt`)
            //     this.setState({description: '', list: response.data })

            await axios.get(`${URL}?sort=-creatdAt`).then(
                response => this.setState({description: '', list: response.data })
                )
            
        } catch(err ){
            console.Log('Error:')
            console.error(err)
        } finally {
            this.setState({loading: false})
        }
     }

    async handleAdd(){

        this.setState({loading: true})
        try {
            await axios.post(URL, { description: this.state.description })
            this.refresh()
        } catch(err ){
            console.error(err)
        } finally {
            this.setState({loading: false})
        }
    }

    async handleDelete(id) {
        this.setState({loading: true})

        try {
            await axios.delete(`${URL}/${id}`)
            this.refresh()
        }
        catch(exception){
            console.error(exception)
        }
        finally {
            this.setState({loading: false})
        }
    } 

    async handleUndone(todo) {
        this.setState({loading: true})

        try {
            await axios.put(`${URL}/${todo._id}`, {...todo, done: false})
            this.refresh()
        }
        catch(exception) {
            console.error(exception)
        }
        finally {
            this.setState({loading: false})
        }
    }

    async handleDone(todo) {
        this.setState({loading: true})

        try {
            await axios.put(`${URL}/${todo._id}`, {...todo, done: true})
            this.refresh()
        }
        catch(exception) {
            console.error(exception)
        }
        finally {
            this.setState({loading: false})
        }
    }

     render(){
         return (
            <div>
                {this.state.loading?"Carregando":null}
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd} description={this.props.description} tarefaOnChange={this.tarefaOnChange}/>
                <TodoList 
                    list={this.state.list} 
                    deleteOnClick={this.handleDelete} 
                    undoneOnClick={this.handleUndone}
                    doneOnClick={this.handleDone}
                />
            </div>
         );
     }
 }

 /*
            <IconButton style="success" icon="check" onClick={() => this.props.doneOnClick(todo)}></IconButton>
            <IconButton style="warning" icon="undo" onClick={() => this.props.undoneOnClick(todo)}></IconButton>
            <IconButton style="danger" icon="trash" onClick={() => this.props.deleteOnClick(todo._id)}></IconButton>
 */

 export default Todo