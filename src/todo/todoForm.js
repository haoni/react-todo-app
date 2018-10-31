import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

class TodoForm extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        console.log('TodoForm: Eu!')

        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10' >
                    <div className="row">
                        <div className="col-md-10">
                            <input id="decription" className="form-Control col-md-12" placeholder="Adicione uma tarefa" value={this.props.description} onChange={this.props.tarefaOnChange}/>
                        </div>
                        <div  className="col-md-2">
                            <IconButton style="primary" icon="plus" hide={false} onClick={this.props.handleAdd}/>
                        </div>
                    </div>

                </Grid>
            </div>
        )
    }
}

export default TodoForm