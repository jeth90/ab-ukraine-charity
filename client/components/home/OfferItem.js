import React from 'react'
import Image from 'next/image'

const OfferItem = ({name, image, percentage, price}) => {
  return (
    <div className="card__item seven mb-0">
        <div className="card_body space-x-10">
            <div className="d-flex space-x-10">
                <div>
                    <a href="Item-details.html" className="product__img">
                        <Image src={image} alt="product" layout='fill' objectFit='contain'/>
                    </a>
                </div>
                <div className="">
                    <span className="product__name txt_sm _bold">{name}</span>
                    <span className="offer txt_xs">{percentage}</span>
                </div>
            </div>
            <div className="space-x-3">
                <div className='eth__img'>
                    <Image src="/img/icons/ETH-2.svg" alt="eth" layout='fill' objectFit='contain'/>
                </div>
               
                <span className="price txt_sm _bold">{price} ETH</span>
            </div>
        </div>
    </div>
  )
}

export default OfferItem