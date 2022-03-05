import React from 'react'
import Image from 'next/image'

const HeaderMobile = () => {
    return (
        <header className="header__1 js-header header_wallet" id="header_admin">
            <div className="container">
                <div className="wrapper js-header-wrapper space-x-10">
                    <div className="header__logo">
                        <a href="index.html">
                            <Image className="header__logo" id="logo_js" src="/img/logos/Logo.svg" alt="logo" layout='fill'/>
                        </a>
                    </div>
            
                    <div className="header__menu">
                        <ul className="d-flex space-x-20">
                            <li className="has_popup">
                                <a className="color_black" href="#">Homes <i className="ri-more-2-fill"></i></a>
                                <ul className="menu__popup space-y-20">
                                    <li>
                                        <a href="Home1.html">
                                            <i className="ri-home-smile-2-line"></i>
                                            Home page 1
                                        </a>
                                    </li>
                                    <li>
                                        <a href="Home2.html">
                                            <i className="ri-home-2-line"></i> Home page 2</a>
                                    </li>
                                    <li>
                                        <a href="Home3.html">
                                            <i className="ri-home-5-line"></i> Home page 3</a>
                                    </li>
                                </ul>
                            </li>
                            <li> <a className="color_black" href="/event"> Create an event</a> </li>
                            <li> <a className="color_black" href="Collections.html"> Collections</a> </li>
                            <li> <a className="color_black" href="Profile.html"> Profile</a> </li>
                            <li> <a className="color_black" href="Creators.html"> Creators</a> </li>
                            <li> <a className="color_black" href="kit.html"> Ui Kit </a> </li>
                            <li className="has_popup2">
                                <a className="color_black is_new" href="#">Pages <i className="ri-more-2-fill"></i></a>
                                <ul className="menu__popup2 space-y-20">
                                    <div className="row sub_menu_row">                                    
                                        <div className="col-lg-6 space-y-10">                                      
                                            <li>
                                                <a href="Activity.html">
                                                    <i className="ri-line-chart-line"></i>
                                                    Activity
                                                </a>
                                            </li>
                                          
                                            <li>
                                                <a className="is_new" href="edit_profile.html">
                                                    <i className="ri-edit-line"></i>
                                                    Edit Profile
                                                </a>
                                            </li>
                                    
                                            
                                            <li>
                                                <a href="Item-details.html">
                                                    <i className="ri-gallery-line"></i>
                                                    Item details
                                                </a>
                                            </li>
                                          
                                            <li>
                                                <a className="is_new" href="Live_Auctions.html">
                                                    <i className="ri-auction-line"></i>
                                                    Live Auctions
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a href="Upcoming_projects.html">
                                                    <i className="ri-upload-line"></i>
                                                    Upcoming projects
                                                </a>
                                            </li>
                                         
                                            <li>
                                                <a className="is_new" href="ranking.html">
                                                    <i className="ri-funds-line"></i>
                                                    Ranking
                                                </a>
                                            </li>
                                    
                                        
                                            <li>
                                                <a className="is_new" href="newsletter.html">
                                                    <i className="ri-mail-open-line"></i>
                                                    Newsletter
                                                </a>
                                            </li>
                                            
                                            <li>
                                                <a href="forum.html">
                                                    <i className="ri-discuss-line"></i>
                                                    Forum &amp; community
                                                </a>
                                            </li>
                                          
                                            <li>
                                                <a href="post_details.html">
                                                    <i className="ri-chat-check-line"></i>
                                                    Forum details
                                                </a>
                                            </li>
                                    
                                           
                                            <li>
                                                <a href="no_results.html">
                                                    <i className="ri-file-search-line"></i>
                                                    No Result
                                                </a>
                                            </li>
                                    
                                           
                                            <li>
                                                <a className="is_new" href="Contact.html">
                                                    <i className="ri-customer-service-2-line"></i>
                                                    Contact
                                                </a>
                                            </li>
                                    
                                        </div>
                                    
                                    
                                        <div className="col-lg-6 space-y-10">                                   
                                         
                                            <li>
                                                <a href="Upload-type.html">
                                                    <i className="ri-upload-line"></i>
                                                    Upload Types
                                                </a>
                                            </li>
                                    
                                            <li>
                                                <a href="Connect-wallet.html">
                                                    <i className="ri-wallet-3-line"></i>
                                                    Connect wallet
                                                </a>
                                            </li>
                                                                              
                                            <li>
                                                <a href="questions.html">
                                                    <i className="ri-question-line"></i>
                                                    FAQ
                                                </a>
                                            </li>
                                         
                                            <li>
                                                <a className="is_new" href="Submit_request.html">
                                                    <i className="ri-share-forward-line"></i>
                                                    Submit request
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a className="is_new" href="Submit_request.html">
                                                    <i className="ri-message-3-line"></i>
                                                    Request chat
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a className="is_new" href="blog.html">
                                                    <i className="ri-layout-line"></i>
                                                    Blog
                                                </a>
                                            </li>
                                          
                                            <li>
                                                <a className="is_new" href="article.html">
                                                    <i className="ri-newspaper-line"></i>
                                                    Article
                                                </a>
                                            </li>
                                         
                                            <li>
                                                <a href="register.html">
                                                    <i className="ri-lock-line"></i>
                                                    Register
                                                </a>
                                            </li>
                                          
                                            <li>
                                                <a href="login.html">
                                                    <i className="ri-shield-user-line"></i>
                                                    Login
                                                </a>
                                            </li>
                                        
                                            <li>
                                                <a href="Privacy.html">
                                                    <i className="ri-file-text-line"></i>
                                                    Privacy Policy
                                                </a>
                                            </li>
                                           
                                            <li>
                                                <a c="" href="404-2.html">
                                                    <i className="ri-file-damage-line"></i>
                                                    404
                                                </a>
                                            </li>
                                        </div>
                                    </div>						</ul>
                            </li>
                        </ul>
                    </div>
                   
                    <div className="header__search">
                        <input type="text" placeholder="Search"/>
                        <button className="header__result">
                            <i className="ri-search-line"></i>
                        </button>
                    </div>
                    <div className="d-flex align-items-center space-x-20">
                        <div className="header__notifications">
                            <div className="js-notifications-icon">
                                <i className="ri-notification-3-line"></i>
                            </div>
                            <div className="notifications_popup space-y-20">
                                <div className="d-flex justify-content-between">
                                    <h5> Notifications</h5>
                                    <a href="Activity.html" className="badge color_white">View all</a>
                                </div>
                                <div className="item
                                    space-x-20
                                    d-flex
                                    justify-content-between
                                    align-items-center">
                                    <Image className="thumb" src="/img/notifications/1.png" alt="..." layout='fill'/>
                                    <div className="details">
                                        <a href="404-3.html"> <h6>Money revieved</h6> </a>
                                        <p>0.6 ETH</p>
                                    </div>
                                    <span className="circle"></span>
                                </div>
                            </div>
                        </div>
                        <div className="header__avatar">
                            <div className="price">
                                <span>2.45 <strong>ETH</strong> </span>
                            </div>
                            <Image className="avatar" src="/img/avatars/avatar_2.png" alt="avatar" layout='fill'/>
                            <div className="avatar_popup space-y-20">
                                <div className="d-flex align-items-center justify-content-between">
                                    <span> 13b9ebda035r178... </span>
                                    <a href="index.html" className="ml-2">
                                        <i className="ri-file-copy-line"></i>
                                    </a>
                                </div>
                                <div className="d-flex align-items-center space-x-10">
                                    <Image className="coin" src="/img/logos/coin.svg" alt="/" layout='fill'/>
                                    <div className="info">
                                        <p className="text-sm font-book text-gray-400">Balance</p>
                                        <p className="w-full text-sm font-bold text-green-500">16.58 ETH</p>
                                    </div>
                                </div>
                                <div className="hr"></div>
                                <div className="links space-y-10">
                                    <a href="#">
                                        <i className="ri-landscape-line"></i> <span> My items</span>
                                    </a>
                                    <a href="edit_profile.html">
                                        <i className="ri-pencil-line"></i> <span> Edit Profile</span>
                                    </a>
                                    <a href="#">
                                        <i className="ri-logout-circle-line"></i> <span> Logout</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="header__btns">
                            <a className="btn btn-primary btn-sm" href="Upload-type.html">Create</a>
                        </div>
                        <div className="header__burger js-header-burger"></div>
                    </div>
                    <div className="header__mobile js-header-mobile">
                        <div className="header__mobile__menu space-y-40">
                            <ul className="d-flex space-y-20">
                                <li> <a className="color_black" href="Marketplace.html"> Marketplace</a> </li>
                                <li> <a className="color_black" href="Collections.html"> Collections</a> </li>
                                <li> <a className="color_black" href="Profile.html"> Profile</a> </li>
                                <li> <a className="color_black" href="Creators.html"> Creators</a> </li>
                    
                            </ul>
                            <div className="space-y-20">
                                <div className="header__search in_mobile w-full">
                                    <input type="text" placeholder="Search"/>
                                    <button className="header__result">
                                        <i className="ri-search-line"></i>
                                    </button>
                                </div>
                                <a className="btn btn-grad btn-sm" href="Connect-wallet.html">Connect
                                    wallet</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderMobile