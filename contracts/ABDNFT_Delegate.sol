// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface ABDVerified {
    function balanceOf(address account) external view returns (uint256);

    function safeTransferFrom(
        address from,
        address to,
        uint256 tokenId
    ) external;

    function getTokenId(address account) external view returns (uint256);
}

interface ABDToken {
    function balanceOf(address account) external view returns (uint256);
}

contract ABDDelegate is ERC721, ERC721URIStorage, ERC721Burnable, Ownable {
    uint256 id = 0;
    mapping(address => uint256) tokenIdUser;

    constructor() ERC721("ABDDelegate", "ABDDelegate") {}

    function safeMint(address delegatorAddr) public {
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        id++;
        uint256 verTokenId = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).getTokenId(msg.sender);
        ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).safeTransferFrom(msg.sender, delegatorAddr, verTokenId);
        _safeMint(delegatorAddr, id);
        _setTokenURI(id, "delegator");
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
