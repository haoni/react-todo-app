import React from 'react'
import If from "./if"

import {Button, ButtonToolbar} from 'react-bootstrap'

class IconButton extends React.Component {

    render(){
        return (
            <If test={this.props.hide} >
                <Button className={`btn btn-${this.props.style}`} onClick={this.props.onClick}>
                    <i className={`fa fa-${this.props.icon}`}></i>
                </Button>
            </If>
        )
    }
}

export default IconButton