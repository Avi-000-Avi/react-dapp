pragma solidity ^0.8.4;

import "hardhat/console.sol";

contract Token {
    string public name = "Toppo Token";
    string public symbol = "TT";
    uint public totalSupply = 10000;
    mapping(address=> uint) balances;

    constructor(){
        balances[msg.sender] = totalSupply;
    }

    function transfer(address to, uint amount) external {
        require(balances[msg.sender] >= amount , "Not enough tokens");
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }

    function balanceOf(address account) external view returns (uint) {
        return balances[account];
    }
}