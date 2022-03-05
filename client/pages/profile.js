import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Card2 from '../components/shared/Card2'
import { useAppContext } from '../context/ContextProvider';

const Profile = () => {
    const {myValue, setMyValue} = useAppContext()

    useEffect(()=>{

    })

    

    return (
        <>
            <div className="mb-100">
				<div className="hero__profile">
					<div className="cover">
						<Image src="/img/bg/prrofile.png" alt="" layout='fill' objectFit='cover'/>
					</div>
					<div className="infos">
						<div className="container">
							<div className="row flex-wrap align-items-center justify-content-between">
								<div className="col-md-auto mr-20">
									<div className="avatars d-flex space-x-20 align-items-center">
										<div className="avatar_wrap">
                                            <div  className="avatar avatar-lg" >
                                                <Image src="/img/avatars/avatar_4.png" alt="avatar" layout='fill' objectFit='cover'/>
                                            </div>											
										</div>
										<h5>@ayoub fennouni</h5>
									</div>
								</div>
								<div className="col-md-auto">
									<div className="d-flex flex-wrap align-items-center
										space-x-20 mb-20_reset">
										<div className="mb-20">
											<div className="copy">
												<span className="color_text"> {myValue}
												</span>
												<a href="#">
													<i className="ri-file-copy-line color_text"></i>
												</a>
											</div>
										</div>
										<div className="d-flex flex-wrap align-items-center
											space-x-20">
											<div className="mb-20">
												<a href="btn" className="btn btn-dark btn-sm">
													Follow
												</a>
			
											</div>
											<div className="mb-20">
												<div className="share">
													<div className="icon">
														<a href="#"> <i className="ri-share-line"></i>
														</a>
													</div>
													<div className="dropdown__popup">
														<ul className="space-y-10">
															<li> <a href=""> <i className="ri-facebook-line"></i>
																</a>
															</li>
															<li> <a href=""> <i className="ri-messenger-line"></i>
																</a>
															</li>
															<li> <a href=""> <i className="ri-whatsapp-line"></i>
																</a>
															</li>
															<li> <a href=""> <i className="ri-youtube-line"></i>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
											<div className="mb-20">
												<div className="more">
													<div className="icon">
														<a href="#"> <i className="ri-more-fill"></i>
														</a>
													</div>
													<div className="dropdown__popup">
														<ul className="space-y-10">
															<li>
																<a href="#" className="space-x-10
																	d-flex">
																	<i className="ri-flag-line"></i>
																	<span> Report </span>
																</a>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

            <div className="container">
				<div className="row justify-content-center">
					<div className="col-lg-3 col-md-7 order-md-0 order-1">
						<div className="profile__sidebar">
							<div className="space-y-40">
								<div className="space-y-10">
									<h5>About me</h5>
									<div className="box space-y-20">
										<p>
											I make art with the simple goal of giving you
											something
											pleasing to look at for a few seconds.
										</p>
										<div className="row">
											<div className="col-6">
												<span className="txt_sm color_text">Collections</span>
												<h4>105</h4>
											</div>
											<div className="col-6">
												<span className="txt_sm color_text">Creations</span>
												<h4>406</h4>
											</div>
										</div>
									</div>
								</div>
								<div className="space-y-10">
									<h5>Follow me</h5>
									<div className="box">
										<ul className="social_profile space-y-10 overflow-hidden">
											<li>
												<a href="#">
													<i className="ri-facebook-line"></i>
													<span className="color_text">facebook/</span>
													@creabik
												</a>
											</li>
											<li>
												<a href="#">
													<i className="ri-messenger-line"></i>
													<span className="color_text"> messenger/</span>
													@creabik
												</a>
											</li>
											<li>
												<a href="#">
													<i className="ri-whatsapp-line"></i>
													<span className="color_text"> whatsapp/</span>
													@creabik
												</a>
											</li>
											<li>
												<a href="#">
													<i className="ri-youtube-line"></i>
													<span className="color_text">youtube/</span>
													@creabik
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
							<p className="text-center txt_sm mt-20 color_text">Since 2021</p>
						</div>
					</div>
					<div className="col-lg-9 col-md-12 order-md-1 order-0">
						<div className="profile__content">
                            <div className="space-x-10">
                                <div className="d-flex justify-content-between">
                                    <ul className="nav nav-tabs d-flex space-x-10 mb-30" role="tablist">
                                        <li className="nav-item">
                                            <a className="btn btn-white btn-sm active" data-toggle="tab" href="#tabs-1" role="tab">
                                                Creations</a>
                                        </li>											
                                    </ul>
                                
                                    <div className="dropdown d-none d-sm-block">
                                        <button className="btn btn-white btn-sm dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Recent Active
                                        </button>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Action</a>
                                            <a className="dropdown-item" href="#">Another
                                                action</a>
                                            <a className="dropdown-item" href="#">Something
                                                else here</a>
                                        </div>
                                    </div>
                                </div>
        
                                <div className="tab-content">
                                    <div className="tab-pane active" id="tabs-1" role="tabpanel">
                                        <div className="row mb-30_reset">
                                            <Card2/>
                                        </div>
                                    </div>
                                
                                </div>
                            </div>
						</div>
					</div>
				</div>
			</div>
        </>
    )
}


export default Profile
