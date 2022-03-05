import React from 'react'
const BtnConnect = ({show, connect}) => {

    if (!show)  return null;
    return (
        <div className="header__btns">
            <button className="btn btn-grad btn-sm" onClick={connect}><i className="ri-wallet-3-line"></i>Connect wallet</button>
        </div>       
    )
}

export default BtnConnect
