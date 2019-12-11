import React, {useState} from 'react';
import { Badge, Spinner, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Button, ButtonGroup } from 'reactstrap';
import Edit from '../Edit'

function AccountDetail(props) {
  return (
    <ListGroup>
      <ListGroupItem active>
     
      {props.name}
       
        
       
        {/* <h2 class ="mainValue">{props.value}</h2> */}
        <p class="percent">+ 1.87%   <h5 class="privateClient"> <Badge size="sm" color="secondary">Private Client</Badge></h5></p> 
        
      </ListGroupItem>
      <ListGroupItem>

      

        
        
        {/* <h3>Buttons </h3> */}
      <ListGroup>
        <ListGroup>
      <ListGroupItem >
        <ListGroupItemHeading>Recent Activity</ListGroupItemHeading>
        {/* <ListGroupItemText> */}
            <ul class="info">
                <li>Sold 500 shares of AAPL </li>
                <li>Bought 400 shares of FB</li>
                <li>Sold 150 shares of TSLA</li>
            </ul>
        
        {/* </ListGroupItemText>         */}
        {/* <hr className="my-2" /> */}
         
        
        
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Contact & Personal Info</ListGroupItemHeading>
        {/* <ListGroupItemText> */}
        <ul class="info">
                <li>ADDRESS: {props.address} </li>
                <li>DOB: {props.birth}</li>
                <li>Profession: {props.profession}</li>
                <li>Email: myclient@gmail.com</li>
            </ul>
        {/* </ListGroupItemText> */}
      </ListGroupItem>
      <ListGroupItem>
        <ListGroupItemHeading>Notes</ListGroupItemHeading>
        <ListGroupItemText>
        {props.notes}
        </ListGroupItemText>
      </ListGroupItem>
    </ListGroup>
        
      </ListGroup>
        
      </ListGroupItem>
      {/* <Button color="primary" size="lg" block>Edit</Button> */}
      <Edit updateClient={props.updateClient} value={props.value} name={props.name} birth ={props.birth} address={props.address} notes={props.notes} profession={props.profession} id={props.id} rating={props.rating}  />
    <Button color="success" size="lg" block>+ New Appointment</Button>
    <Button color="secondary" size="lg" block>Correspondence</Button>
    </ListGroup>
    
  );
}

export default AccountDetail;