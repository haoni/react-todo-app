import React from 'react'

class If extends React.Component {
    render(){
        if(!this.props.test){
            return this.props.children;
        } 
        
        return false;
    }
}

export default If