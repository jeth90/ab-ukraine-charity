import React from 'react'

const Card = ({brand, name, image, price}) => {
  return (
    <div className="card__item eight">
        <div className="card_body space-y-10">
        
            <div className="card_head space-y-10">
                <span className="txt_xs color_text
                    numbering">1/6</span>
                <a href="Item-details.html">
                    <Image className="product__img" src={image} alt=""/>
                </a>
                <div>
                    <p className="txt_xs level">Level 3 </p>
                </div>                
            </div>
            <div className="card_footer justify-content-between">
                <div className="space-y-3">
                    <div className="space-x-5 d-flex">
                        <i className="ri-star-fill
                            color_brand txt_xs"></i>
                        <span className="color_brand txt_xs">{brand}</span>
                    </div>
                    <a href="Profile.html">
                        <p className="product__name txt_sm">{name}</p>
                    </a>
                </div>
                <div className="price__content space-x-5">
                    <Image className="eth__img" src="/img/icons/ETH-2.svg" alt="eth"/>
                    <p className="price txt_sm _bold">{price} ETH</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card