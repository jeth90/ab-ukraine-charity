// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

contract Donations {
    uint256 donationCount;

    event Transfer(address from, address receiver, uint amount, uint256 timestamp);

    struct TransferStruct {
        address sender; 
        address receiver; 
        uint amount; 
        uint256 timestamp;
    }

    TransferStruct[] donations;

    function addToBlockChain(address payable receiver, uint amount) public{
        donationCount += 1;
        donations.push(TransferStruct(msg.sender, receiver, amount, block.timestamp));

        emit Transfer(msg.sender, receiver, amount, block.timestamp);
    }

    function getAllDonations() public view returns (TransferStruct[] memory){
        return donations;
    }

    function getDonationCount() public view returns (uint256){
        return donationCount;
    }

}