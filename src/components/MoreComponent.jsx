import React from 'react'
import { Button, Modal, ModalBody, ModalHeader, ModalFooter} from "shards-react";
import { Form, FormInput, FormGroup, FormTextarea } from "shards-react";
import { Container, Row, Col } from "shards-react";
import EditPlant from './EditClient'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"


export default class MoreModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      open: false
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
    this.props.createPlant(this.state)
}

  render() {
    const { open } = this.state;
    return (
        <div>
            <Button onClick={this.toggle}>Click Me!</Button>
            <Modal open={open} toggle={this.toggle}>
                <ModalHeader>{this.props.name}</ModalHeader>
                <ModalBody>👋 
                  <h3>Scientific Name:{this.props.scientificName}</h3>
                  
                {this.props.sun} {this.props.water} {this.props.description}
                 {this.props.imageOne} {this.props.imageTwo}}! 
                <ModalFooter>
                  Footer
                </ModalFooter>
                <Button theme="danger" onClick={() =>{this.props.deletePlant(this.props.id)}}>Delete</Button>
                <EditPlant updatePlant={this.props.updatePlant} id={this.props.id}name={this.props.name} scientificName={this.props.scientificName} sun={this.props.sun} water={this.props.water} description={this.props.description}
                 imageOne={this.props.imageOne} imageTwo={this.props.imageTwo}>Edit</EditPlant>
                </ModalBody>
            </Modal>
        </div>
    );
  }
}