import { useState, useEffect } from "react";

export function useWindowSize(size) {

  const [width, setWidth] = useState(window.innerWidth);
  const [height,setHeight] = useState(window.innerHeight);

  useEffect(() => {
    function handleResize() {  
      setWidth(window.innerWidth);
      setHeight(window.innerHeight)
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (size.toLowerCase() != 'height'? width : height);
}

export  const useWindowsWidth = () => useWindowSize('width')
export  const useWindowsHeight = () => useWindowSize('height')
