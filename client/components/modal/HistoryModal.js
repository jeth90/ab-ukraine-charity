import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";

const HistoryModal = ({ show, onClose, children, title }) => {
    const [isBrowser, setIsBrowser] = useState(false);
  
    useEffect(() => {
      setIsBrowser(true);
    }, []);

    const handleCloseClick = (e) => {
      e.preventDefault();
      onClose();
    };

    const modalContent = show ? (
        // <div className="modal show">
        //     <div className="modal-dialog">
        //         <div className="modal-content">
        //             <a href="#" className="modal-close" onClick={handleCloseClick}>x</a>
        //             <div className="modal-body p-5">
        //             <h5 className="heading-title">{title}</h5>
        //             {children}                           
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="modal fade popup" id="popup_history" tabIndex="-1" role="dialog"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close" data-dismiss="modal"
                        aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <div className="modal-body space-y-20 p-40">
                        <h4> History </h4>
                        <div className="creator_item creator_card space-x-10">
                            <div className="avatars space-x-10">
                                <div className="media">
                                    <div className="badge">
                                        <img src="assets/img/icons/Badge.svg"
                                            alt=""/>
                                    </div>
                                    <a href="Profile.html">
                                        <img
                                            src="assets/img/avatars/avatar_1.png"
                                            alt="Avatar"
                                            className="avatar avatar-md" />
                                    </a>
                                </div>
                                <div>
                                    <p className="color_black">Bid accepted <span
                                            className="color_brand">1
                                            ETH</span> by <a className="color_black txt
                                            _bold"
                                            href="Profile.html">ayoub</a></p>
                                    <span className="date color_text">28/06/2021, 12:08</span>
                                </div>
                            </div>
                        </div>
                        <div className="creator_item creator_card space-x-10">
                            <div className="avatars space-x-10">
                                <div className="media">
                                    <div className="badge">
                                        <img src="assets/img/icons/Badge.svg"
                                            alt=""/>
                                    </div>
                                    <a href="Profile.html">
                                        <img
                                            src="assets/img/avatars/avatar_2.png"
                                            alt="Avatar"
                                            className="avatar avatar-md"/>
                                    </a>
                                </div>
                                <div>
                                    <p className="color_black">Bid accepted <span
                                            className="color_brand">3
                                            ETH</span> by <a className="color_black txt
                                            _bold"
                                            href="Profile.html">monir</a></p>
                                    <span className="date color_text">22/05/2021, 12:08</span>
                                </div>
                            </div>
                        </div>
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
}

export default HistoryModal