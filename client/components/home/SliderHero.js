import React from 'react'
import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper";
import Image from 'next/image'

const SliderHero = () => {
  return (
      <div className="carousel-slider">
          <Swiper   
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
                scale: 0.8
            }}
            loop={true}
            autoplay= {{
                delay: 500,
            }}
            pagination={true}
            navigation={true}
            modules={[Pagination, EffectCoverflow, Navigation]}
            className="swiper">
        <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_1.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_2.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_1.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_2.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_1.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="carousel-slider-animate-opacity">
            <Image src={"/img/bg/home5/in_hero5_2.png"} layout='fill' objectFit='cover'/>
            <div className="slide-content">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>                
            </div>
        </div>
    </SwiperSlide>
    </Swiper>
    </div>
    
  )
}

export default SliderHero

