// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/access/Ownable.sol";

interface ABDStaffOnboard {
    function safeMint(address to, string memory uri) external;
}

interface ABDVerified {
    function balanceOf(address account) external view returns (uint256);
}

interface ABDToken {
    function balanceOf(address account) external view returns (uint256);
}

interface ABDDelegator {
    function balanceOf(address account) external view returns (uint256);
}

contract ABDAO is Ownable {
    mapping(string => uint256[]) proposalMappingFor;
    mapping(string => uint256[]) proposalMappingAgainst;
    mapping(string => uint256[]) proposalMappingAbstrain;
    mapping(string => uint256) proposalTime;
    mapping(string => address) voted;
    mapping(string => address) staffonBoard;
    mapping(string => string) proposalType;
    mapping(string => string) proposalStatus;
    mapping(string => bool) proposalExists;
    string[] proposals;
    uint256 id = 0;

    struct Votes {
        uint256 forVotes;
        uint256 againstVotes;
        uint256 abstrainVotes;
        uint256 funding;
    }

    function createProposalOwner(
        string memory cid,
        string memory ty,
        string memory command
    ) public onlyOwner {}

    function createProposal(
        string memory cid,
        string memory ty,
        address onBoardaddr
    ) public {
        require(!proposalExists[cid], "Proposal already exists");
        proposalExists[cid] = true;
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        proposalTime[cid] = block.timestamp;
        proposalMappingFor[cid];
        proposalMappingAgainst[cid];
        proposalMappingAbstrain[cid];
        proposalType[cid] = ty;
        proposals.push(cid);
        if (compareStrings(ty, "onboard")) {
            require(onBoardaddr != address(0), "For onboard proposals please propose a target address");
            staffonBoard[cid] = onBoardaddr;
        }
    }

    function voteFor(string memory cid) public {
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        uint256 isDelegator = ABDDelegator(0x0239777D29829bb61D3964438385799c2Ce4873c).balanceOf(msg.sender);
        uint256 currentTime = block.timestamp;
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        require((currentTime - proposalTime[cid]) <= 840, "Voting period is over!");
        require(voted[cid] != msg.sender, "You already voted!");
        proposalMappingFor[cid].push(isABDTokenHolder);
        if (isDelegator > 0) {
            proposalMappingFor[cid].push(isDelegator);
        }
        voted[cid] = msg.sender;
    }

    function voteAgainst(string memory cid) public {
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        uint256 isDelegator = ABDDelegator(0x0239777D29829bb61D3964438385799c2Ce4873c).balanceOf(msg.sender);
        uint256 currentTime = block.timestamp;
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        require((currentTime - proposalTime[cid]) <= 840, "Voting period is over!");
        require(voted[cid] != msg.sender, "You already voted!");
        proposalMappingAgainst[cid].push(isABDTokenHolder);
        if (isDelegator > 0) {
            proposalMappingFor[cid].push(isDelegator);
        }
        voted[cid] = msg.sender;
    }

    function voteAbstain(string memory cid) public {
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        uint256 isDelegator = ABDDelegator(0x0239777D29829bb61D3964438385799c2Ce4873c).balanceOf(msg.sender);
        uint256 currentTime = block.timestamp;
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        require((currentTime - proposalTime[cid]) <= 840, "Voting period is over!");
        require(voted[cid] != msg.sender, "You already voted!");
        proposalMappingAbstrain[cid].push(isABDTokenHolder);
        if (isDelegator > 0) {
            proposalMappingFor[cid].push(isDelegator);
        }
        voted[cid] = msg.sender;
    }

    function executeProposal(string memory cid, address abdStaffContract) external returns (uint256) {
        uint256 isABDTokenHolder = ABDToken(0x88E6FEFD19f640d55D9B5e980A62b92f0607d1Df).balanceOf(msg.sender);
        uint256 isVerifedHolder = ABDVerified(0x5255fE6D7688c582632fB7c01dc08Dd0320dA6d7).balanceOf(msg.sender);
        require(isABDTokenHolder > 0, "You do not have any ABDTokens");
        require(isVerifedHolder > 0, "You are not a verified ABD holder");
        uint256 currentTime = block.timestamp;
        require((currentTime - proposalTime[cid]) > 840, "Voting period is not over!");

        Votes memory votes;
        Votes memory qfVotes;
        Votes memory finalVotes;

        votes.forVotes = getSum(proposalMappingFor[cid]);
        votes.againstVotes = getSum(proposalMappingAgainst[cid]);
        votes.abstrainVotes = getSum(proposalMappingAbstrain[cid]);
        votes.funding = (votes.forVotes + votes.againstVotes + votes.abstrainVotes);

        qfVotes.forVotes = getQFSum(proposalMappingFor[cid]);
        qfVotes.againstVotes = getQFSum(proposalMappingAgainst[cid]);
        qfVotes.abstrainVotes = getQFSum(proposalMappingAbstrain[cid]);
        qfVotes.funding = (qfVotes.forVotes + qfVotes.againstVotes + qfVotes.abstrainVotes);

        finalVotes.forVotes = (((qfVotes.forVotes * 1000000000000) / qfVotes.funding) * votes.funding);
        finalVotes.againstVotes = (((qfVotes.againstVotes * 1000000000000) / qfVotes.funding) * votes.funding);
        finalVotes.abstrainVotes = (((qfVotes.abstrainVotes * 1000000000000) / qfVotes.funding) * votes.funding);

        proposalStatus[cid] = "failed due to too many abstained votes";
        require(
            (finalVotes.forVotes + finalVotes.againstVotes) > finalVotes.abstrainVotes,
            "Too many abstrained votes!"
        );
        if (finalVotes.forVotes <= finalVotes.againstVotes) {
            proposalStatus[cid] = "failed due to votes against";
        }
        require(finalVotes.forVotes > finalVotes.againstVotes, "Too many votes against!");
        proposalStatus[cid] = "succeeded";

        if (compareStrings(proposalType[cid], "onboard")) {
            id++;
            ABDStaffOnboard(abdStaffContract).safeMint(staffonBoard[cid], "onboard");
        }

        return finalVotes.forVotes;
    }

    function results(string memory cid)
        public
        view
        returns (
            Votes memory votes,
            Votes memory qfVotes,
            Votes memory finalVotes
        )
    {
        // Votes memory finalVotes;
        //uint[3] memory result;

        votes.forVotes = getSum(proposalMappingFor[cid]);
        votes.againstVotes = getSum(proposalMappingAgainst[cid]);
        votes.abstrainVotes = getSum(proposalMappingAbstrain[cid]);
        votes.funding = (votes.forVotes + votes.againstVotes + votes.abstrainVotes);

        qfVotes.forVotes = getQFSum(proposalMappingFor[cid]);
        qfVotes.againstVotes = getQFSum(proposalMappingAgainst[cid]);
        qfVotes.abstrainVotes = getQFSum(proposalMappingAbstrain[cid]);
        qfVotes.funding = (qfVotes.forVotes + qfVotes.againstVotes + qfVotes.abstrainVotes);

        finalVotes.forVotes = (((qfVotes.forVotes * 1000000000000) / qfVotes.funding) * votes.funding);
        finalVotes.againstVotes = (((qfVotes.againstVotes * 1000000000000) / qfVotes.funding) * votes.funding);
        finalVotes.abstrainVotes = (((qfVotes.abstrainVotes * 1000000000000) / qfVotes.funding) * votes.funding);
    }

    function getForVotes(string memory cid) public view returns (uint256) {
        return getSum(proposalMappingFor[cid]);
    }

    function getAgainstVotes(string memory cid) public view returns (uint256) {
        return getSum(proposalMappingAgainst[cid]);
    }

    function getAbstainVotes(string memory cid) public view returns (uint256) {
        return getSum(proposalMappingAbstrain[cid]);
    }

    function getProposals() public view returns (string[] memory) {
        return proposals;
    }

    function getProposalStatus(string memory cid) public view returns (string memory) {
        return proposalStatus[cid];
    }

    function getSum(uint256[] memory arr) public pure returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 0; i < arr.length; i++) sum = sum + arr[i];
        return sum;
    }

    function getQFSum(uint256[] memory arr) public pure returns (uint256) {
        uint256 sum = 0;
        for (uint256 i = 0; i < arr.length; i++) sum = sum + sqrt(arr[i]);
        return (sum * sum);
    }

    function sqrt(uint256 x) public pure returns (uint256 y) {
        uint256 z = (x + 1) / 2;
        y = x;
        while (z < y) {
            y = z;
            z = (x / z + z) / 2;
        }
    }

    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return (keccak256(abi.encodePacked((a))) == keccak256(abi.encodePacked((b))));
    }
}
