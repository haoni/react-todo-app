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
        this.searchOnClick = this.searchOnClick.bind(this)
        this.tarefaOnChange = this.tarefaOnChange.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.handleUndone = this.handleUndone.bind(this)
        this.handleDone = this.handleDone.bind(this)
        this.clearOnClick = this.clearOnClick.bind(this)

        this.refresh('')
     }

     tarefaOnChange(e) {
        this.setState({description: e.target.value })
     }

    async refresh(description = ''){
        try {
            const search = description ? `&description__regex=/${description}/` : ''
            await axios.get(`${URL}?sort=-creatdAt${search}`).then(
                response => this.setState({description, list: response.data })
            )
        } catch(err ) {
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
            this.refresh('')
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
            this.refresh('')
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
            this.refresh(this.state.description)
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
            this.refresh(this.state.description)
        }
        catch(exception) {
            console.error(exception)
        }
        finally {
            this.setState({loading: false})
        }
    }

    async searchOnClick() {
        this.setState({loading: true})

        try {
            this.refresh(this.state.description)
        }
        catch(exception) {
            console.error(exception)
        }
        finally {
            this.setState({loading: false})
        }
    }

    async clearOnClick(){
        this.setState({loading: true})

        try {
            this.refresh('')
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
                <TodoForm 
                    handleAdd={this.handleAdd} 
                    description={this.state.description} 
                    tarefaOnChange={this.tarefaOnChange} 
                    handleSearch={this.searchOnClick}
                    handleClear={this.clearOnClick}
                />
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

 export default Todo