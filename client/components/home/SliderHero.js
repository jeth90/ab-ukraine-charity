import React, {useContext} from 'react'
import Link from 'next/link'

import { EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, FreeMode } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useAppContext } from '../../context/ContextProvider';


const SliderHero = () => {
    const {connectWallet, currentAccount} = useAppContext();

  return (
    <Swiper   
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={true}
        navigation={true}
        modules={[Pagination, EffectCoverflow, Navigation, FreeMode]}
        className="swiper"
    >
    <SwiperSlide>
        <div className="hero__left slide_1">
            <div className="hero__wrap space-y-20 text-center">
                <h2 className="hero__title">
                    Trade NFT and Virtual
                    In-game Items
                </h2>
                <p className="hero__text txt">Raroin among the
                    top six NFT platforms on
                    eips.ethereum.org, the DMarket
                    marketplace enables millions of gamers
                    and Esports fans</p>
                 <div>
                    {!currentAccount && (
                        <button type='button' className="btn btn-grad w-50" 
                            style={{margin: 'auto'}} 
                            onClick={connectWallet}>Connect Wallet</button>
                    )}
                    {currentAccount && (
                        <button type='button' className="btn btn-grad w-50" 
                            style={{margin: 'auto'}} 
                            >SELECT</button>
                    )}
                    
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="hero__left slide_2">
            <div className="hero__wrap space-y-20 text-center">
                <h2 className="hero__title">
                    Discover digital art and collect NFTs
                </h2>
                <p className="hero__text txt">raroin is a shared
                    liquidity NFT market smart contract
                    which is used by multiple websites to
                    provide the users the best possible
                    experience.</p>
                <div>
                    <Link href="#">
                        <a className="btn btn-grad w-50" style={{margin: 'auto'}} >SELECT</a>
                    </Link>
                </div>
            </div>
        </div>
    </SwiperSlide>
    <SwiperSlide>
        <div className="hero__left slide_3">
            <div className="hero__wrap space-y-20 text-center">
                <h2 className="hero__title">
                    Pull market data from our digital asset
                    API
                </h2>
                <p className="hero__text txt"> raroin is a
                    shared
                    liquidity NFT market smart contract
                    which is used by multiple websites to
                    provide the users the best possible
                    experience</p>
                <div>
                    <Link href="#">
                        <a className="btn btn-grad w-50" style={{margin: 'auto'}}>SELECT</a>
                    </Link>
                </div>
            </div>
        </div>
    </SwiperSlide>

    </Swiper>
  )
}

export default SliderHero

