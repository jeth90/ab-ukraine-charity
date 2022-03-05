import React from 'react'
import Image from 'next/image'
import Card from '../shared/Card'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";


const SliderDeals = ({deals}) => {
    deals.map(deal => {
        console.log(deal)
    })
    
  return (
    <Swiper   
        navigation={true}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Pagination, Navigation]}
        className="swiper_deals"
        >
            {deals.forEach((deal) => {
                <SwiperSlide>
                    <Card 
                    name={deal.name}
                    brand={deal.brand}
                    price={deal.price}
                    image={deal.image}	
                    />		                                        
                </SwiperSlide>                
            })}
      
    </Swiper>
  )
}

export default SliderDeals