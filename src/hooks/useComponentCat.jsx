import { useState, useEffect, useRef } from "react";

export default function useComponentCat(initialIsVisible){
    const [componentCategory, setComponentCategory] = useState(initialIsVisible);
    const setRef = useRef(null);
  
    const handleClickOutside = (event)=>{
  if(setRef.current && !setRef.current.contains(event.target)){
    setComponentCategory(false)
  }
    };
  
    useEffect(() => {
      document.addEventListener("click", handleClickOutside, true);
      return () => {
        document.removeEventListener("click", handleClickOutside, true);
      };
    }, []);
    return {setRef, componentCategory, setComponentCategory};
  }