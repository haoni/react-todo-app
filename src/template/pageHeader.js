import React from 'react' 

class PageHeader extends React.Component {
    
    constructor(props){
        super(props);
    }

    render(){
        return(
            <header>
                <h2>{this.props.name} <small>{this.props.small}</small> </h2>
            </header>
        );
    }

}

export default PageHeader;