import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";


const SliderGames = () => {
  return (
    <Swiper   
        navigation={true}
        spaceBetween={10}
        slidesPerView={5}
        modules={[Pagination, Navigation]}
        className="swiper_games2"
        >
        <SwiperSlide>
            <a className="box card__games game_1" href="#">
                <Image className="logo" src="/img/logos/game_1.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_2" href="#">
                <Image className="logo" src="/img/logos/game_2.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_3" href="#">
                <Image className="logo" src="/img/logos/game_3.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_4" href="#">
                <Image className="logo" src="/img/logos/game_4.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_5" href="#">
                <Image className="logo" src="/img/logos/game_5.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_6" href="#">
                <Image className="logo" src="/img/logos/game_6.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
        <SwiperSlide>
            <a className="box card__games game_7" href="#">
                <Image className="logo" src="/img/logos/game_7.svg" layout='fill' objectFit='contain'/>
            </a>
        </SwiperSlide>
    </Swiper>
  )
}

export default SliderGames