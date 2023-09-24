//contract/ImagineToken.sol
//SPDX-License-Identifier: MIT

pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "hardhat/console.sol";

contract ImagineToken is ERC20 {

    constructor() ERC20("ImagineToken", "IT") {
        console.log("You can debug here");
        _mint(msg.sender, 100000000 * (10 ** 18));
        
    }
    
} 


