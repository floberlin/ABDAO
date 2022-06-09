// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ABDAOToken is ERC20, Ownable {
    constructor() ERC20("ABDAO", "ABD") {
        _mint(0x131CF758d9EF6bcA88928442DC715c8Fdc113952, 100000000000000);
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}
