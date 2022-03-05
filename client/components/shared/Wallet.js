import React, { useState} from 'react'
import Image from 'next/image'

const Wallet = ({show}) => {

    const [visible, setVisible] = useState(false)
    const showWallet = ()=>{
        setVisible(visible ? false : true)
    }

    if (!show)  return null;
    return (
        <div className="d-flex align-items-center space-x-20">           
            <div className="header__avatar" onClick={()=>{showWallet()}}>
                <div className="price">
                    <span>2.45 <strong>ETH</strong> </span>
                </div>
                <div className='avatar'>
                    <Image src="/img/avatars/avatar_2.png" alt="avatar" layout='fill' objectFit='cover'/>
                </div>                
                <div className={"avatar_popup space-y-20" + (visible ? " visible" : "")}>
                    <div className="d-flex align-items-center justify-content-between">
                        <span> 13b9ebda035r178... </span>
                        <a href="/" className="ml-2">
                            <i className="ri-file-copy-line"></i>
                        </a>
                    </div>
                    <div className="d-flex align-items-center space-x-10">
                        <div className="coin">
                            <Image  src="/img/logos/coin.svg" alt="/" layout='fill' objectFit='cover'/>
                        </div>
                        
                        <div className="info">
                            <p className="text-sm font-book text-gray-400">Balance</p>
                            <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                        </div>
                    </div>
                    <div className="hr"></div>
                    <div className="links space-y-10">
                        <a href="#">
                            <i className="ri-landscape-line"></i> <span> My items</span>
                        </a>
                        <a href="edit_profile.html">
                            <i className="ri-pencil-line"></i> <span> Edit Profile</span>
                        </a>
                        <a href="#">
                            <i className="ri-logout-circle-line"></i> <span> Logout</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="header__btns">
                <a className="btn btn-primary btn-sm" href="/events/create">Create</a>
            </div>
            <div className="header__burger js-header-burger"></div>
        </div>
    )
}


export default Wallet