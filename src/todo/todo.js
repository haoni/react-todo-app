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

        //this.refresh = this.refresh.bind(this)

        console.log('Quem veio primeiro?')
        this.refresh()

     }

     tarefaOnChange(e) {
        this.setState({ description: e.target.value })
     }

    async refresh(){
         try {
            // console.log('Executando o Refresh.')
            const response = await axios.get(`${URL}?sort=-creatdAt`)
            // console.log('Resultado do GET do Refresh.')
            // console.log(response.data)

            this.setState({...this.state, description: '', list: response.data })
            // console.log('Como ficou o state após o setState do Refresh.')
            // console.log(this.state)


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
            const response = await axios.post(URL, { description: this.state.description })
            // console.log('Resultado do POST do handleAdd.')
            // console.log(response.data)

            // console.log('Chamou o refresh através do handleAdd')
            this.refresh()
        } catch(err ){
            console.error(err)
        } finally {
            this.setState({loading: false})
        }
    }

     render(){
        console.log('Todo: Eu!')
         return (
            <div>
                {this.state.loading?"Carregando":null}
                <PageHeader name="Tarefas" small="Cadastro" />
                <TodoForm handleAdd={this.handleAdd} description={this.props.description} tarefaOnChange={this.tarefaOnChange}/>
                <TodoList list={this.state.list}/>
            </div>
         );
     }
 }

 export default Todo