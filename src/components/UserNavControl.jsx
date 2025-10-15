import React from "react";
import { useAuth } from "../contexts/AuthContext";


function UserNavControl() {

    const { user, token, login, logout } = useAuth();
    const isAuth = token && user ? true : false

  
    return isAuth ? <UserDropdown /> : 
    
    <i 
    onClick={()=>  onHideModal(true)} 
    class="h3 bi bi-person-fill hover-icon m-0 d-none d-md-block"
   >
   </i>
    ;
}

export default UserNavControl;