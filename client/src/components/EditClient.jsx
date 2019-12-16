import React from 'react'
import { Button, Modal, ModalBody, ModalHeader } from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Row, Col } from "shards-react";


import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class editPlant extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false,
      name: "",
      scientificName: "",
      water: "", 
      sun: "",
      description: "",
      imageOne: "", 
      imageTwo: "",
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
    this.props.updatePlant(this.props.id ,this.state)
    this.toggle()
}

  render() {
    const { open } = this.state;
    return (
      <div>
        <Button onClick={this.toggle}>Edit</Button>
        <Modal  open={open} toggle={this.toggle}>
            <ModalHeader>+ Edit Plant 🌿</ModalHeader>
            <ModalBody>👋 Hello there! Just fill out the information bellow to edit your plant!</ModalBody>
          
            <Container>
                
                    <Col >
                    <Form onSubmit={this.handleSubmit}>

                        <Row>
                        <FormGroup>
                            <label htmlFor="name">Name</label>
                            <FormInput onChange={this.handleChange} name="name" id="name" placeholder={this.props.name} />
                        </FormGroup>
                
                        <FormGroup>
                            <label htmlFor="scientificName">Scientific Name</label>
                        <FormInput onChange={this.handleChange} name="scientificName" id="scientificName" placeholder={this.props.scientificName} />                       
                        </FormGroup>

                        </Row>
                        <Row>

                        <FormGroup>
                            <label htmlFor="water">Water</label>
                            <FormInput onChange={this.handleChange} name="water" id="water" placeholder={this.props.water} />
                        </FormGroup>

                        <FormGroup>
                            <label htmlFor="sun">Sun</label>
                            <FormInput onChange={this.handleChange} name="sun" id="sun" placeholder={this.props.sun} />
                        </FormGroup>

                        </Row>
                        <Row>      
                        <p className="mb-2">
                        🤔 A little something about this plant...
                        </p>
                        </Row>
                        <Row>

                        <FormGroup>
                        <label htmlFor="description">zdescription</label>
                        <FormTextarea onChange={this.handleChange} name="description" placeholder={this.props.description}/> 
                        </FormGroup>

                        </Row>
                        

                        <Row>
                        <FormGroup>
                            <label htmlFor="imageOne">Image 1</label>
                            <FormInput onChange={this.handleChange} name="imageOne" id="imageOne" placeholder={this.props.imageOne} />
                        </FormGroup>
                        </Row>

                        <Row>
                        <FormGroup>
                            <label htmlFor="imageTwo">Image 2</label>
                            <FormInput onChange={this.handleChange} name="imageTwo" id="imageTwo" placeholder={this.props.imageTwo} />
                        </FormGroup>
                        </Row>
                        <br></br>
                        <Button block type="submit">Save Changes</Button>
                        <Button block theme="secondary">Cancel </Button> 
                        <br></br>          
                    </Form>
                    </Col>
            </Container>
            </Modal>
      </div>
    );
  }
}