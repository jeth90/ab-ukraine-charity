import React from 'react'
import Image from 'next/image'

const Card2 = ({userEvents}) => {

    if (!userEvents) return null 
    return (
        <>
            {
                userEvents.map((event, i) => {
                    return (
                        <div className="col-xl-4 col-lg-6 col-md-6" key={i}>
                            <div className="card__item three">
                                <div className="card_body space-y-10">															
                                    <div className="card_head">
                                        <div className='img'>
                                            <Image src={userEvents.main_image || "/img/items/item_1.png"} alt="" layout='fill' objectFit='cover'/>
                                        </div>
                                        
                                        <a href="#" className="likes
                                            space-x-3">
                                            <i className="ri-heart-3-fill"></i>
                                            <span className="txt_sm">1.2k</span>
                                        </a>
                                        <div className="action">
                                            <a href="#" className="btn
                                                btn-primary btn-sm
                                                btn_auction" data-toggle="modal" data-target="#popup_bid">
                                                <i className="ri-auction-line
                                                    color_white"></i>
                                                Place Your Bid
                                            </a>
                                        </div>
                                    </div>
                                
                                    <h6 className="card_title">
                                        <a className="color_black" href="Item-details.html">
                                            pop art Painting
                                        </a>
                                    </h6>

                                    <div className="card_footer d-block
                                        space-y-10">
                                        <div className="d-flex
                                            justify-content-between
                                            align-items-center">
                                            <div className="creators
                                                space-x-10">
                                                <div className="avatars
                                                    -space-x-20">
                                                    <a href="Profile.html">
                                                        <Image src="/img/avatars/avatar_1.png" alt="Avatar" className="avatar avatar-sm" layout='fill' objectFit='cover'/>
                                                    </a>
                                                    <a href="Profile.html">
                                                        <Image src="/img/avatars/avatar_2.png" alt="Avatar" className="avatar avatar-sm" layout='fill' objectFit='cover'/>
                                                    </a>
                                                </div>
                                                <a href="Profile.html">
                                                    <p className="avatars_name
                                                        txt_sm">
                                                        @{userEvents.name}
                                                    </p>
                                                </a>
                                            </div>
                                            <a href="#" className="space-x-3">
                                                <p className="color_green txt_sm">0.001 ETH</p>
                                            </a>
                                        </div>
                                        <div className="hr"></div>
                                        <div className="d-flex
                                            align-items-center
                                            space-x-10">
                                            <i className="ri-vip-crown-line"></i>
                                            <p className="color_text
                                                txt_sm" style={{"width": "auto"}}>
                                                Highest bid
                                            </p>
                                            <span className="color_black
                                                txt_sm">0.022
                                                ETH</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
        
    )
}

export default Card2
