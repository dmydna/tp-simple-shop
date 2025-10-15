import React from "react";
import { Nav } from "react-bootstrap";
import SearchOverlay from "./SearchOverlay";
import CartButton from "./CartButton";
import UserDropdown from "./UserDropdown";




function ActionBar(){

    return(
        <Nav className={`align-items-center flex-row order-md-2`}>
          <SearchOverlay/>
          <UserDropdown />
          <CartButton/> 
        </Nav>
    )
}

export default ActionBar