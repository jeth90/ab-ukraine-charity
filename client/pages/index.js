import React, {useContext} from 'react'
import Image from 'next/image'
import SliderHero from '../components/home/SliderHero'
import Link from 'next/link'
import NFTLink from '../components/nft/NFTList'
import NFTList from '../components/nft/NFTList'
import { useAppContext } from '../context/ContextProvider'

export default function Home() {
    const nftList = [
            {
                id: 1,
                donationAmount: 5,
                image: '/img/bg/home5/21.png',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, felis et viverra consectetur, magna.'
            },
            {
                id: 2,
                donationAmount: 50,
                image: '/img/bg/home5/22.png',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, felis et viverra consectetur, magna.'
            },
            {
                id: 3,
                donationAmount: 500,
                image: '/img/bg/home5/23.png',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, felis et viverra consectetur, magna.'
            },
            {
                id: 4,
                donationAmount: 5000,
                image: '/img/bg/home5/24.png',
                details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed porttitor, felis et viverra consectetur, magna.'
            },
            
        ]
    
    const {connectWallet, currentAccount, sendDonation, formData, setFormData, handleChange} = useAppContext();

    const handleSubmit = (e) => {
        e.preventDefault()

        const data = new FormData();
        data.append('currency', e.target.currency.value)
        data.append('amount', e.target.amount.value)
        console.log(data);

        setFormData({ 
            addressTo:'0x7a1C81A7016038B032aB83F96B91c5BBC6c4F643', 
            amount: e.target.amount.value
        })
        sendDonation();
    }

  return (
        <>
            <div className="hero__5" style={{marginTop: '60px'}}>
                <div className="container">
                    <h1 className='mb-50 text-center'> Lorem ipsum dolor sit amet.</h1>
                    <div className="row align-items-center justify-content-center gx-4">
                        <div className="col-lg-8 col-md-12">
                            <SliderHero/>
                        </div>
                    </div>
                    <h4 className='mt-50 text-center'>Select Charity (or we select one charity)</h4> 
                    <form method='post' onSubmit={handleSubmit}>
                        <div className='row mt-50 gx-5'>
                        
                            <div className='col-lg-4'>
                                <div className="form-group space-y-10 mb-0">
                                    <div className="space-y-10">
                                        <select className="form-select
                                            custom-select" aria-label="Default
                                            select example"
                                            name='currency'
                                            onChange={handleChange}>
                                            <option>Select Currency</option>
                                            <option value='usdt'>usdt</option>
                                            <option value='eth'>eth</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="form-group space-y-10 mb-0">
                                    <div className="space-y-10">
                                        <input
                                            type="number"
                                            step='any'
                                            className="form-control"
                                            placeholder="Input how much you want to donate"
                                            name='amount'
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-4'>
                                <div className="form-group space-y-10 mb-0">
                                    <div className="space-y-10 space-x-20" style={{paddingLeft: 'auto'}}>
                                        
                                        <button type='submit' 
                                            className="btn btn-grad form-control"
                                            >Confirm</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className='row mt-50'>
                        <div className='col-lg-8' style={{margin: 'auto'}}>
                            <div className="hr" style={{border: 'solid 2px '}}></div>
                            <div className="section_head text-center pt-20">
                                <h2 className="section__title">NFT  LIST</h2>
                            </div>
                        </div>
                    </div>
                                       
                    <div className="row mt-50 mb-30_reset">
                        {/* Events */}
                        <NFTList nft={nftList} />
                    </div>
                 	
                </div>
            </div>     
        </>      
  )
}
