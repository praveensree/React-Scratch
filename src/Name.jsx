import React,{Component} from 'react';

class Name extends Component {
    constructor(props) {
      super(props);
      this.state = {Fname: "Sree"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({Fname: "Praveen Sree"})
      }, 1000)
    }
    render() {
      return (
        <h1>My Name is {this.state.Fname}</h1>
      );
    }
  }
  export {Name};