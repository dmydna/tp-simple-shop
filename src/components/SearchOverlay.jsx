import React, { useEffect, useState } from "react";
import { useWindowsWidth } from "../contexts/useWindowSize";
import Search from "./Search";

function SearchOverlay(){

    const width = useWindowsWidth()
  
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
      if (width >= 1300 && isActive) {
        setIsActive(false);
      }
    }, [width, isActive]);

    return (
     <div className={`${isActive ? 'header-search-overlay' : ''}`}>
      <Search toggle={isActive} setToggle={setIsActive} />
     </div>
    )
}

export default SearchOverlay;