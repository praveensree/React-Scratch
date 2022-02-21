import React,{Component} from 'react';

class Name extends Component {
    constructor(props) {
      super(props);
      this.state = {Fname: "Habibi"};
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({Fname: "Dubai"})
      }, 3000)
    }
    render() {
      return (
        <h1>Come to {this.state.Fname}</h1>
      );
    }
  }
  export {Name};