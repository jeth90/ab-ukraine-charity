import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

const SignupModal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);
  
    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };
  
    const modalContent = show ? (
        <div className="modal show">
            <div className="modal-dialog">
                <div className="modal-content">
                    <a href="#" className="modal-close" onClick={handleCloseClick}>x</a>
                    <div className="modal-body p-5">
                    <h5 className="heading-title">{title}</h5>
                    {children}                           
                    </div>
                </div>
            </div>
        </div>
    ) : null;
  
    if (isBrowser) {
      return ReactDOM.createPortal(
        modalContent,
        document.getElementById("modal-root")
      );
    } else {
      return null;
    }
  };
  
  
  export default SignupModal;