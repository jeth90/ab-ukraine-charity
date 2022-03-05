import Image from 'next/image'
import React, { useState, useEffect, useContext  } from "react"
import { useRouter } from 'next/router'
import BtnConnect from '../shared/BtnConnect'
import Wallet from '../shared/Wallet'
import { useAppContext } from '../../context/ContextProvider';
import {contractABI, contractAddress}  from '../../utils/Transactions.json'

const Swal = require('sweetalert2')

const Header = () => {
    const router = useRouter()
    const [token, setToken] = useState(false)
    const {setMyValue, connectWallet, currentAccount} = useAppContext()

    useEffect(()=> {        
        setToken(localStorage.getItem('token'))      
        setMyValue(localStorage.getItem('token'))    
    }, [])

    const isInstalled = () => {
        return (typeof window.ethereum !== 'undefined');
    }

    const sign = async (accountid) => {
        console.log(accountid);
        const res = await getNonce(accountid);
        
        const msg = res.nonce;
        try {        
            const sign = await ethereum.request({
                method: 'personal_sign',
                params: [msg, accountid, ''],
            });

            const res = await validateSignature(accountid, sign);
          
            //signup
            if (res.signedUp == false) {
                router.push('/register')
                //console.log(res.signedUp)
                //setFormAccountID(accountid)
                //setShowModal(true)
                //window.location.href = `${process.env.BACKEND_URL}/register`
            }
            //login
            else {
                await signIn(accountid)
                await getUser(accountid)                
            }
        } catch (err) {
            console.error(err);
        }
    }

    const getNonce = async (accountid) => {
        //console.log(process.env.BACKEND_URL)
        const response = await fetch(`${process.env.BACKEND_URL}/api/users/nonce/${accountid}`)   
        return await response.json()
    }


    async function validateSignature(accountid, sign) {
        let data = {
            accountid: accountid,
            msg: sign
        }

        try {
            const response = await fetch(`${process.env.BACKEND_URL}/api/users/validate`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            const data_1 = await response.json();
            return data_1;
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const signIn = async (accountid) => {        
        let data = {
            accountid: accountid
        }
        return await fetch(`${process.env.BACKEND_URL}/login`, {
            method: 'POST', 
            headers: {                
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
            })
    }

    const getUser = async (accountid) => {  
        const user =  await fetch(`${process.env.BACKEND_URL}/api/users/${accountid}`, {
            method: 'GET', 
            headers: {                
                'Content-Type': 'application/json',
            }
            }) .then(response => response.json())
        
        setUsername(user.name)
    }


    const connect = async () => {
        if (isInstalled()) {
            let accounts = await ethereum.request({
                method: 'eth_requestAccounts'
            });
            if (accounts.length > 0){
                localStorage.setItem('mprnts-userAddress', accounts[0])
                // setAccountId(accounts[0])
                sign(accounts[0]);              
            }      
        } else {
            setShowInstallModal(true)
        }      
    }


    const submitSignUpForm = async (event) => {
        event.preventDefault()
        const accountid = event.target.accountid.value
        const data = { 
            accountid: accountid,
            name: event.target.name.value,
            email: event.target.email.value,
            password: event.target.password.value
        }

        fetch(`${process.env.BACKEND_URL}/api/users/add`, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            })
            .then(response => response.json())
            .then(async(data) => {
                if (data.message == 'success'){
                    Swal.fire('Success!','','success')
                    //setShowModal(false)
                    await signIn(accountid)
                    await getUser(accountid)     
                    localStorage.setItem('accountid', accountid)
                    localStorage.setItem('token', accountid)
                    setToken(localStorage.getItem('token'))          
                }else{
                    Swal.fire('Error!', data.message, 'error')
                }

            })
            .catch((error) => {
                console.error('Error:', error);
            })
    }

    return (
        <header className="header__1 js-header" id="header">
        <div className="container">
            <div className="wrapper js-header-wrapper">
                <div className="header__logo ml-30">
                    <a href="index.html">
                        <div style={{ 'position': 'relative', 'width': '120px', 'height': '40px'}}>
                            <Image className="header__logo" id="logo_js" src="/img/logos/Logo.svg" alt="logo" layout='fill'  objectFit='contain'/>
                        </div>                            
                    </a>
                </div>
    
                <div className="header__menu">
                    <ul className="d-flex space-x-20">
                        <li>
                            <a className="color_black" href="/">Home</a>                                       
                        </li>                                  
                        <li>
                            <a className="color_black" href="/collections"> Collections</a>
                        </li>                                  
                        <li>
                            <a className="color_black" href="/creators"> Creators</a>
                        </li>
                    </ul>
                </div>
            
                <div className="header__search">
                    <input type="text" placeholder="Search"/>
                    <button className="header__result">
                        <i className="ri-search-line"></i>
                    </button>
                </div>
                

                <BtnConnect show={!token} connect={connect}/>    
                <Wallet show={token}/>

                <div className="header__burger js-header-burger"></div>
    
                <div className="header__mobile js-header-mobile">
                    <div className="header__mobile__menu space-y-40">
                        <ul className="d-flex space-y-20">
                            <li> <a className="color_black" href="/marketplace"> Marketplace</a> </li>
                            <li> <a className="color_black" href="/collections"> Collections</a> </li>
                            <li> <a className="color_black" href="Profile.html"> Profile</a> </li>
                            <li> <a className="color_black" href="/creators"> Creators</a> </li>
                
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

export default Header