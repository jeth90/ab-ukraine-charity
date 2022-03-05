import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
const axios = require('axios');

const TicketsModal = ({ show, onClose, event, submitTicketForm }) => {
    const [isBrowser, setIsBrowser] = useState(false);  
    const [metaverses, setMetaverses] = useState()    

    useEffect(() => {
        setIsBrowser(true);
        axios.get(`${process.env.BACKEND_URL}/api/metaverses`)
        .then(function (response) {
            setMetaverses(response.data)
        })       
    }, []);

    const handleCloseClick = (e) => {
        e.preventDefault();
        onClose();
    };

    const submitTicket = (e)=> {
        e.preventDefault();
        submitTicketForm(e);
    }

    const modalContent = show ? (      
        <div className="modal fade popup show" id="popup_error" tabIndex="-1" role="dialog" ariaHidden="true" style={{display: "block", paddingRight: "17px"}}>
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <button type="button" className="close" dataDismiss="modal" aria-label="Close">
                        <span aria-hidden="true" onClick={()=> handleCloseClick()}>&times;</span>
                    </button>
                    <div className="modal-body space-y-20 p-40">
                        <form method="post" onSubmit={submitTicket}>
                                <input name="eventid" type="hidden" value={event._id}/>

                                <div className="space-y-10">
                                    <span className="nameInput">Available quantity</span>
                                    <input type="number" className="form-control" placeholder="Quantity" name="quantity"/>
                                </div>

                                <div className="space-y-10">
                                    <span className="nameInput">Price</span>
                                    <input type="number" className="form-control" placeholder="Price" name="price"/>
                                </div>

                                <div className="space-y-10">
                                    <span className="nameInput">Select a Subject</span>
                                    <select className="form-select custom-select" aria-label="Default select example" name="metaverse">
                                        {
                                            metaverses &&
                                            metaverses.map((metaverse, i) => {
                                                return (<option value={metaverse._id} key={i}>{metaverse.name}</option>)
                                            })
                                        }                                      
                                    </select>
                                </div>
                                <div className="space-y-20 mb-0">                                                                    
                                    <div className="space-y-10">
                                        <span className="nameInput"> Description</span>
                                        <textarea style={{minHeight: '110px'}} className="mb-0" name="description" >
                                        </textarea>
                                    </div>
                                </div>
                                <button className="btn btn-grad btn-lg mt-5" type="submit">Save &amp; Continue</button>
                            </form>
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

export default TicketsModal