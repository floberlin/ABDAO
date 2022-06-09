// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract ABDStaff is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 id = 0;

    constructor() ERC721("ABDStaff", "ABDStaff") {
        _transferOwnership(0x12436D7c9dD938C42D147b3EEE8c68B5Cc1bB078);
    }

    function safeMint(address to, string memory uri) public onlyOwner {
        id++;
        _safeMint(to, id);
        _setTokenURI(id, uri);
    }

    function transferFrom(address from, uint256 tokenId) external {
        require(msg.sender == address(0), "nope");
        super.transferFrom(from, from, tokenId);
    }

    function safeTransferFrom(address from, uint256 tokenId) external {
        require(msg.sender == address(0), "nope");
        super.safeTransferFrom(from, from, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }

    function tokenURI(uint256 tokenId) public view override(ERC721, ERC721URIStorage) returns (string memory) {
        return super.tokenURI(tokenId);
    }
}
