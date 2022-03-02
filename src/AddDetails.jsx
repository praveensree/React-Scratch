import React from 'react';
import axios from 'axios';

import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';
class AddDetails extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      Name: '',
      Age: '',
      Contact: ''
    }
  }
  AddPatient = () => {
    axios.post('http://localhost:10807/api/hospital',
      {
        Name: this.state.Name,
        Age: this.state.Age,
        Contact: this.state.Contact
      })
      .then(res=>{
        alert('Saved')
      })
  }

  NameHandle = (e) => {
    this.setState({ Name: e.target.value });
  }
  AgeHandle = (e) => {
    this.setState({ Age: e.target.value });
  }
  ContactHandle = (e) => {
    this.setState({ Contact: e.target.value });
  }

  render() {
    return (
      <Container>
        <h4>Enter Student Informations</h4>
        <Form>
          <Col>
            <FormGroup row>
              <Label for="name">Name</Label>

              <Input type="text" name="Name" onChange={this.NameHandle}  placeholder="Enter Name" />

            </FormGroup>
            <FormGroup row>
              <Label for="age" >Age</Label>

              <Input type="text" name="age" onChange={this.AgeHandle}  placeholder="Enter Age" />

            </FormGroup>
            <FormGroup row>
              <Label for="contact" >Contact</Label>

              <Input type="text" name="contact" onChange={this.ContactHandle}  placeholder="Enter Contact" />

            </FormGroup>

          </Col>
          <Col>
            <FormGroup row>
              <Col >
              </Col>
              <Col>
                <button type="button" className="btn" onClick={this.AddPatient} >Submit</button>
              </Col>

            </FormGroup>
          </Col>
        </Form>
      </Container>
    );
  }

}

export default AddDetails;