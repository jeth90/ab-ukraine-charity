import React from 'react'
import Image from 'next/image'
import {useState} from 'react'
import Link from 'next/link'

const NFTList = ({nft}) => { 
    const [showDropDown, setShowDropDown] = useState(false)
    const [index, setIndex] = useState(null)

    const toggleDropDown = (i)=> {
        if (index != i){
            setShowDropDown(true)
        }else{
            setShowDropDown(showDropDown ? false : true)
        }
       
        setIndex(i)
    }

    if (!nft) return null   
    return (
        <>
            {
                nft.map((item, i) => {
                    return (
                   
                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6" key={i}>
			        		<div className="card__item four">
			        			<div className="card_body space-y-10">
			        				<h6 className="card_title">
			        					&nbsp;&nbsp;{item.donationAmount} USD donation
			        				</h6>
			        				<div className="card_head">
			        					<a href={`/events/${item.id}`}>
			        						<Image src={item.image} layout="fill"
			        							alt=""/>
			        					</a>
			        				</div>
			        				{/* <!-- =============== --> */}
			        				
			        				<div className="card_footer d-block space-y-10" style={{padding: 'auto'}}>
			        					<div className="card_footer justify-content-between text-center">
			        						<div className="creators">
			        							<p className="txt_sm"> {item.details} </p>
			        						</div>
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

export default NFTList
