import React from 'react'
import If from "./if"

class IconButton extends React.Component {

    render(){
        return (
            <If test={this.props.hide} >
                <button className={`btn btn-${this.props.style}`} onClick={this.props.onClick}>
                    <i className={`fa fa-${this.props.icon}`}></i>
                </button>
            </If>
        )
    }
}

export default IconButton