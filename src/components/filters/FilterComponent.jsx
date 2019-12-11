import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const Filter = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret style={{marginTop:20}}>
        Filters
        </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={props.turnOffRetirementFilter}>Reset filter</DropdownItem>
        <DropdownItem onClick={props.engageRetirementFilter}>Qualified/retirement</DropdownItem>
        <DropdownItem>Private Clients</DropdownItem>
        <DropdownItem>Watchlist</DropdownItem>
        
      </DropdownMenu>
    </Dropdown>
  );
}

export default Filter;