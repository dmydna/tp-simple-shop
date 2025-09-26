import React, { useState } from "react";
import { Button, Modal, ProgressBar } from "react-bootstrap";
import payLater from "/src/assets/pay-later.png"
import mail from "/src/assets/mail.png"
import purchasing from "/src/assets/purchasing.png"
import devilery from "/src/assets/check-package.png"


function PurchaseSuccessModal({show,onHide}) {

    const [step, setStep] = useState(1);
    const [progress, setProgress] = useState(0);


    const handleNext = () => {
        setStep((prev) => prev + 1)
        setProgress((prev) => prev + step * 25)
    }
    const handlePrev = () => {
        setStep((prev) => prev - 1)
        setProgress((prev) => prev - step - 25)
    };
    const handleAccept = () => {
        setProgress(0)
        setStep(1)
        onHide()
    }

    return (
      <Modal
        show={show}
        onHide={onHide}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            paso {step} de 4
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <ProgressBar 
        style={{ height: "5px" }}
        animated variant="primary" 
        now={ progress  } />
        {step === 1 && (
            <>
              <div className="d-flex">
                 <img width={200} className="mx-auto" src={payLater}/>
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
               <img width={200} className="mx-auto" src={mail}/>
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
               <img width={200} className="mx-auto" src={devilery}/>
           </div>
           <p className="text-center"> 
             Puedes hacer seguimiento de tu producto en todo momento. 
          </p>
         </>   
        )}
        {step === 4 && (
            <>
              <div className="d-flex">
                <img width={200} className="mx-auto" src={purchasing}/>
              </div>
              <p className="text-center">
                Gracias por tu compra. Vuelve pronto.
              </p>
            </>  
        )}
        </Modal.Body>
        <Modal.Footer>
            {step > 1  && (<Button variant="primary" onClick={handlePrev}>Anterior</Button>)}
            {step < 4 ? 
            (<Button variant="primary" onClick={handleNext}>Siguiente</Button>) : 
            (<Button variant="success" onClick={handleAccept}> Aceptar</Button> )}
        </Modal.Footer>
      </Modal>
    );
}
  
export default PurchaseSuccessModal;