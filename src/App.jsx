import React, { Component } from 'react'
//import './App.css'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
        
    }
    
    handleInc() {
        // this.setState({
        //     count:this.state.count+1
        // },()=>console.log('call back',this.state.count)
        // )
        // console.log(this.state.count) 
        this.setState(prevState => ({
            count: prevState.count + 1
        }))

    }
    handleDec() {
        this.setState(prevState => ({
            count: prevState.count - 1
        }))

    }
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <h1>Count {this.state.count}</h1>
                <button class="btn" onClick={() => this.handleInc()}>Increment</button>
                <button onClick={() => this.handleDec()}>Decrement</button>                
            </div>
        )
    }
}

export {App};
