import React from "react";
import LoginModal from "./LoginModal";
import { useUIContext } from "../contexts/UIContext";

function LoginButton({className, Style, children, handle}){
   
    const {showLogin, onHideLogin}  = useUIContext()
    const handleLogin = handle ? handle() && onHideLogin(true) : onHideLogin(true)

    return(
        <>
         <Button
            variant="primary"
            className="py-3 fw-medium fs-5 w-100 mb-3"
            style={{ opacity: 0.8 }}
            onClick={handleLogin}
         >
          <>
          {children}
          </>

         </Button>
         <LoginModal/>
        </>
    )





}

export default LoginButton;