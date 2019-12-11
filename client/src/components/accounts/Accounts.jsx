import React from 'react';
import { Badge, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, ButtonGroup } from 'reactstrap';

const Accounts = (props) => {
  return (
    <ListGroup>
      <ListGroupItem active>
      <span class="onValue">
        All Accounts
        </span>
        <h2 class ="mainValue">{props.value}</h2>
        <p class="percent">+ 1.97%  <h5 class="privateClient"> <Badge size="sm" color="secondary">Private Client</Badge></h5></p> 
        
      </ListGroupItem>
      <ListGroupItem>

      

        
        
        {/* <h3>Buttons </h3> */}
      <ListGroup>
        <ListGroupItem active tag="button" action>Summary</ListGroupItem>
        <ListGroupItem tag="button" action>+ New Work Order</ListGroupItem>
        <ListGroupItem tag="button" action>Documents</ListGroupItem>
        
      </ListGroup>
        
      </ListGroupItem>
      <Button color="primary" size="lg" block>Call</Button>
    <Button color="success" size="lg" block>Place Trade</Button>
    </ListGroup>
    
  );
}

export default Accounts;