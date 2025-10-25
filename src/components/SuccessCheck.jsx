import React, { useEffect, useState } from "react";
import Img0 from "../assets/check-crop-gif.gif"
import Img1 from "../assets/check-crop-frame.gif"


function SuccessCheck({show, width, mensaje, className}){

    const [gif, setGif] = useState()
  
    useEffect(()=>{
        setGif(Img0)
        setTimeout(() => {
          setGif(Img1)
          setMsg(mensaje)
        }, 1400);
    },[show])

    return(
        <div className={`${show ? '' : 'd-none' } ${className}`}>
            <img className="p-4 d-block mx-auto" width={width} src={gif}/>
        </div>
    )
}

export default SuccessCheck