// HoverContext.jsx
import { createContext, useContext, useState } from "react";

const HoverContext = createContext();

export function HoverProvider({ children }) {
  const [hoverState, setHoverState] = useState({ state: false, key: null });

  return (
    <HoverContext.Provider value={{ hoverState, setHoverState }}>
      {children}
    </HoverContext.Provider>
  );
}

export const useHover = () => (
  useContext(HoverContext)
)
