import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Col } from "shards-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"

export default class BasicModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      name: "",
      value: "",
      rating: "",
      retirement: "",
      address: "",
      birth: "",
      notes: "",
      profession: ""
  
     };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({
      open: !this.state.open
    });
  }
  handleChange = (e) => {
    this.setState ({
        [e.target.name] : e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log("CLICKED new client button")
    this.props.createClient(this.state)
}

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button  id="newButton" onClick={this.toggle}> + New</Button>
        <Modal  open={open} toggle={this.toggle} >
          <ModalHeader>+ New Client 🌿</ModalHeader>
          <ModalBody>👋 </ModalBody>
            <Container>
              <Col >
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <label htmlFor="name"> Name</label>
                    <FormInput onChange={this.handleChange} name="name" id="name" placeholder="Name" />
                  </FormGroup>
          
                  <FormGroup>
                    <label htmlFor="value">Value</label>
                  <FormInput onChange={this.handleChange} name="value" id="value" placeholder="value" />                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="rating">Rating</label>
                  <FormInput onChange={this.handleChange} name="rating" id="rating" placeholder="rating" />                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor="retirement">Retirement?</label>
                  <FormInput onChange={this.handleChange} name="retirement" id="retirement" placeholder="retirement" />                       
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "address" >Address</label>
                    <FormInput onChange={this.handleChange} name="address" id="retirement" placeholder="address"  ></FormInput>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "birth" >Birth</label>
                    <FormInput onChange={this.handleChange} name="birth" id="retirement" placeholder="birth"  ></FormInput>
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "notes" >Notes</label>
                    <FormTextarea onChange={this.handleChange} name="notes" id="retirement" placeholder="notes" ></FormTextarea>
                    {/* <FormInput onChange={this.handleChange} name="notes" id="retirement" placeholder="notes"  ></FormInput> */}
                  </FormGroup>

                  <FormGroup>
                    <label htmlFor= "profession" >Profession</label>
                    <FormInput onChange={this.handleChange} name="profession" id="retirement" placeholder="profession"  ></FormInput>
                  </FormGroup>
      
                    <br></br>
                    <Button block type="submit">Save</Button>
                    
                    <br></br>          
                </Form>
              </Col>
            </Container>
            </Modal>
      </div>
    );
  }
}