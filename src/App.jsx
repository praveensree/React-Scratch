import React, { Component } from 'react'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }
    
    handleCount() {
        // this.setState({
        //     count:this.state.count+1
        // },()=>console.log('call back',this.state.count)
        // )
        // console.log(this.state.count) 
        this.setState(prevState => ({
            count: prevState.count + 1
        }))

    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>Count {this.state.count}</h1>
                <button onClick={() => this.handleCount()}>Increment</button>
                <button onClick={()=>this.handleName()}>Change Name</button>
                
            </div>
        )
    }
}

export {App};
