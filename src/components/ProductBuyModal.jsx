import React, { useEffect, useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import Img4 from "/src/assets/check-package.png";
import Img3 from "/src/assets/mail.png";
import Img2 from "/src/assets/pay-later.png";
import Img1 from "/src/assets/purchasing.png";
import Img0 from "/src/assets/online-store.png";
import SuccessCheck from "./SuccessCheck";


function ProductBuyModal({show,onHide}) {


    const [step, setStep] = useState(0);
    const [progress, setProgress] = useState(0);


    const handleNext = () => {
        setStep((prev) => prev + 1)
        setProgress(((step) * 33.3))
    }
    const handlePrev = () => {
        setStep((prev) => prev - 1)
        setProgress((prev) => (prev - 33.3))
    };
    const handleAccept = () => {
        onHide()
    }

    useEffect(()=>{
      if(!show){
        setStep(0);
        setProgress(0);
      }
    },[show])

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="border-0" closeButton>
        </Modal.Header>
        <Modal.Body>
        {step === 0 && 
        (
          <>
           <div className="d-flex">
             <img className="p-4 mx-auto" width={170} src={Img0}/>
           </div>
           <p className="text-center"> 
                Presiona continuar para confirmar tu compra.
           </p>
          </>
        )}
        {step === 1 && 
        (
          <>
            <SuccessCheck 
             width={170} 
             show={true} 
             onHide={{}}
            />
            <p className="text-center text-success"> 
                Tu orden de comprar fue registrada con exito.
            </p>
          </>
        )}
        {step === 2 && (
         <>
           <div className="d-flex">
             <img className="p-4 mx-auto" width={170} src={Img1}/>
           </div>
           <p className="text-center">
             Gracias por tu compra. Vuelve pronto.
           </p>
         </>  
        )}
        </Modal.Body>
        <Modal.Footer className="border-0">
            {step == 0  && 
              (<Button variant="secondary" onClick={()=> onHide(false)}>
                Cancelar
              </Button>)}
            {step < 2  ? 
              (<Button variant="primary" onClick={() => handleNext() && handleAccept()}>
                 Continuar 
              </Button>) : 
              (<Button variant="success" onClick={()=> onHide(false)}>
                Aceptar
              </Button> )}
        </Modal.Footer>
      </Modal>
    );
}
  
export default ProductBuyModal;