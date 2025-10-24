import React, { useEffect, useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import Img4 from "/src/assets/check-package.png";
import Img3 from "/src/assets/mail.png";
import Img2 from "/src/assets/pay-later.png";
import Img1 from "/src/assets/purchasing.png";


function ProductBuyModal({show,onHide}) {

    const [step, setStep] = useState(1);
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
        setStep(1);
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
          <Modal.Title id="contained-modal-title-vcenter" className="text-secondary fs-5 fw-semibold">
            paso {step} de 4
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ProgressBar 
        style={{ height: "5px" }}
        animated variant="primary" 
        now={ progress  } />
        {step === 1 && 
        (
          <>
            <div className="d-flex">
               <img className="p-4 mx-auto" width={170} src={Img2}/>
            </div>
            <p className="text-center"> 
                Tu orden de comprar fue registrada con exito.
            </p>
          </>
        )}
        {step === 2 && 
        (
         <>
           <div className="d-flex">
             <img className="p-4 mx-auto" width={170} src={Img3}/>
           </div>
           <p className="text-center"> 
             En breve nos comunicaremos para coordinar los detalles. 
           </p>
         </>   
        )}
        {step === 3 && 
        (
         <>
           <div className="d-flex">
               <img className="p-4 mx-auto" width={170} src={Img4}/>
           </div>
           <p className="text-center"> 
             Puedes hacer seguimiento de tu compra en todo momento. 
           </p>
         </>   
        )}
        {step === 4 && (
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
            {step == 1 && (<Button variant="danger" onClick={handleAccept}>Cancelar</Button>)}
            {step > 1  && (<Button variant="secondary" onClick={handlePrev}>Anterior</Button>)}
            {step < 4  ? 
            (<Button variant="primary" onClick={handleNext}>
              { step == 1 ? 'Continuar' : 'Siguiente' } 
            </Button>) : 
            (<Button variant="success" onClick={handleAccept}> Aceptar</Button> )}
        </Modal.Footer>
      </Modal>
    );
}
  
export default ProductBuyModal;