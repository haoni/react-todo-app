import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

import { Button } from 'react-bootstrap'

export default props => {

    const keyHandler = (e) => {
        if(e.key === 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }  
        else if (e.key === 'Escape') {
            props.handleClear()
        }
    }

        return (
            <div role="form" className="todoForm">
                <Grid cols='12 9 10' >
                    <div className="row">
                        <div className="col-md-9">
                            <input 
                                    id="decription" 
                                    className="form-Control col-md-12" 
                                    placeholder="Adicione uma tarefa" 
                                    value={props.description} 
                                    onChange={props.tarefaOnChange}
                                    onKeyUp={keyHandler}
                            />
                        </div>
                        <div  className="col-md-3">
                            <Button style={{display:"inline-block"}} bsStyle="primary" onClick={props.handleAdd}><i className="fa fa-plus"></i></Button>
                            <Button style={{display:"inline-block"}} bsStyle="info" onClick={props.handleSearch}><i className="fa fa-search"></i></Button>
                            <Button style={{display:"inline-block"}} bsStyle="warning" onClick={props.handleClear}><i className="fa fa-eraser"></i></Button>
                        </div>
                    </div>

                </Grid>
            </div>
        )
}