import React from 'react';




class FooComponent extends React.Component {

    constructor(){
        super();
        this.state = {
            message: "Hello from foo state!"
        };
    }

    render(){
        console.log(this.props)
        return  <div>{this.props.message} Fooy</div>;
        
        
    }
}


export default FooComponent;