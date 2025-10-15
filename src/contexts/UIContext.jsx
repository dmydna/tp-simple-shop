import { createContext, useContext, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import ContactModal from "../components/ContactModal";
import LoginModal from "../components/LoginModal";

const UIContext = createContext(null)

export function UIProvider({ children }) {

    const [showLogin, onHideLogin] = useState(false)
    const [showContact, onHideContact] = useState(false)
    const [showMenu, onHideMenu] = useState(false)

    const isDesktop = useMediaQuery({ minWidth: 768 });
    useEffect(() => {
      if (!isDesktop) onHideMenu(false);
    }, [isDesktop]);


    return (
        <UIContext.Provider 
         value={{ 
            showLogin, 
            showContact,
            onHideContact, 
            onHideLogin, 
            showMenu,
            onHideMenu,
          }}>
          {children}
          <LoginModal show={showLogin} onHide={onHideLogin}/> 
          <ContactModal show={showContact} onHide={onHideContact}/>
        </UIContext.Provider>
      )
}


export const useUIContext = () => useContext(UIContext);