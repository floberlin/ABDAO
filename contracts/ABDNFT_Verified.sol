// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ABDToken {
    function balanceOf(address account) external view returns (uint256);
}

contract ABDVerified is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 id = 0;
    mapping(address => uint256) tokenIdUser;

    constructor() ERC721("ABDVerified", "ABDVerified") {}

    function safeMint() public {
        id++;
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(this.balanceOf(msg.sender) < 1, "You are already verified");
        tokenIdUser[msg.sender] = id;
        _safeMint(msg.sender, id);
        _setTokenURI(id, "verified");
    }

    function getTokenId(address account) public view returns (uint256) {
        return tokenIdUser[account];
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
