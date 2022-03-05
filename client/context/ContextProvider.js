import React, { useState, useContext, useEffect } from 'react';
import {ethers} from 'ethers';

import {contractABI, contractAddress} from '../utils/constants';

const AppContext = React.createContext();

export function useAppContext() {
    return useContext(AppContext);
}

const {ethereum} = typeof window !== 'undefined' ? window : '';

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer  = provider.getSigner();
    const donationContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({
        provider,
        signer,
        donationContract
    });
    return donationContract;
}

export const AppProvider = ({ children }) => {
    const [myValue, setMyValue] = useState(false);
   
    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo: '', amount: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [donationCount, setDonationCount] = useState(typeof window!=='undefined' ? localStorage.getItem('transactionCount'): '');
    
    const handleChange = (e, name) => {
        setFormData((prevState)=> ({...prevState, [name]: e.target.value}));
    }

    const checkIfWalletisConnected = async () => {
        try {
            if(!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({method: 'eth_accounts'});
            
            if(accounts.length){
                setCurrentAccount(accounts[0]);

                // getAllDonations();
            } else {
                console.log("No accounts found");
            }
            
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }
    }

    const connectWallet = async () => {
        try {
            if(!ethereum) return alert('Please install metamask');

            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            console.log(accounts[0]);
        } catch (error) {
            console.log(error);
            throw new Error("No ethereum object.")
        }
    }

    const sendDonation = async () => {
        try {
            if(!ethereum) return alert('Please install metamask');
            //get data from the form
            
            const {addressTo, amount} = formData;
            const donationContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount)

            await ethereum.request({
                method: 'eth_sendTransaction',
                param: [{
                    from: currentAccount,
                    to: addressTo,
                    gas: '0x5208', //21000 GWEI
                    value: parsedAmount._hex,
                }]
            });

            const donationHash = await donationContract.addToBlockChain(addressTo, parsedAmount);

            setIsLoading(true);
            console.log(`Loading - ${donationHash.hash}`);
            await donationHash.wait();

            setIsLoading(false);
            console.log(`Success - ${donation.hash}`);

            const donationCount = await donationContract.getDonationCount();

            setDonationCount(donationCount.toNumber());

        } catch (error) {
            console.log(error);
            throw new Error("No ethereum objects.")
        }
    }

    useEffect(() => {
        checkIfWalletisConnected();
    },[]);

    return (
        <AppContext.Provider value={{connectWallet, currentAccount, formData, setFormData, handleChange, sendDonation }}>
            {children}
        </AppContext.Provider>
    )
}