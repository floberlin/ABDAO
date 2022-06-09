/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  MyToken,
  MyTokenInterface,
} from "../../../contracts/ABDNFT_Staff.sol/MyToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
    name: "safeMint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260088082526720a12229ba30b33360c11b6020808401828152855180870190965292855284015281519192916200005591600091620000e4565b5080516200006b906001906020840190620000e4565b50505062000088620000826200008e60201b60201c565b62000092565b620001c6565b3390565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b828054620000f2906200018a565b90600052602060002090601f01602090048101928262000116576000855562000161565b82601f106200013157805160ff191683800117855562000161565b8280016001018555821562000161579182015b828111156200016157825182559160200191906001019062000144565b506200016f92915062000173565b5090565b5b808211156200016f576000815560010162000174565b600181811c908216806200019f57607f821691505b602082108103620001c057634e487b7160e01b600052602260045260246000fd5b50919050565b611cb680620001d66000396000f3fe608060405234801561001057600080fd5b50600436106101365760003560e01c8063715018a6116100b2578063b88d4fde11610081578063cd279c7c11610066578063cd279c7c1461027f578063e985e9c514610292578063f2fde38b146102ce57600080fd5b8063b88d4fde14610259578063c87b56dd1461026c57600080fd5b8063715018a6146102255780638da5cb5b1461022d57806395d89b411461023e578063a22cb4651461024657600080fd5b806323b872dd1161010957806342966c68116100ee57806342966c68146101de5780636352211e146101f157806370a082311461020457600080fd5b806323b872dd146101b857806342842e0e146101cb57600080fd5b806301ffc9a71461013b57806306fdde0314610163578063081812fc14610178578063095ea7b3146101a3575b600080fd5b61014e610149366004611815565b6102e1565b60405190151581526020015b60405180910390f35b61016b610333565b60405161015a919061188a565b61018b61018636600461189d565b6103c5565b6040516001600160a01b03909116815260200161015a565b6101b66101b13660046118d2565b61045f565b005b6101b66101c63660046118fc565b610574565b6101b66101d93660046118fc565b6105fc565b6101b66101ec36600461189d565b610617565b61018b6101ff36600461189d565b61069e565b610217610212366004611938565b610729565b60405190815260200161015a565b6101b66107c3565b6007546001600160a01b031661018b565b61016b610829565b6101b6610254366004611953565b610838565b6101b6610267366004611a1b565b610847565b61016b61027a36600461189d565b6108d5565b6101b661028d366004611a97565b6108e0565b61014e6102a0366004611b02565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b6101b66102dc366004611938565b61094e565b60006001600160e01b031982166380ac58cd60e01b148061031257506001600160e01b03198216635b5e139f60e01b145b8061032d57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606000805461034290611b35565b80601f016020809104026020016040519081016040528092919081815260200182805461036e90611b35565b80156103bb5780601f10610390576101008083540402835291602001916103bb565b820191906000526020600020905b81548152906001019060200180831161039e57829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166104435760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061046a8261069e565b9050806001600160a01b0316836001600160a01b0316036104d75760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161043a565b336001600160a01b03821614806104f357506104f381336102a0565b6105655760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161043a565b61056f8383610a2d565b505050565b61057f335b82610a9b565b6105f15760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161043a565b61056f838383610b92565b61056f83838360405180602001604052806000815250610847565b61062033610579565b6106925760405162461bcd60e51b815260206004820152603060248201527f4552433732314275726e61626c653a2063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656400000000000000000000000000000000606482015260840161043a565b61069b81610d46565b50565b6000818152600260205260408120546001600160a01b03168061032d5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201527f656e7420746f6b656e0000000000000000000000000000000000000000000000606482015260840161043a565b60006001600160a01b0382166107a75760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a6560448201527f726f206164647265737300000000000000000000000000000000000000000000606482015260840161043a565b506001600160a01b031660009081526003602052604090205490565b6007546001600160a01b0316331461081d5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161043a565b6108276000610d4f565b565b60606001805461034290611b35565b610843338383610da1565b5050565b6108513383610a9b565b6108c35760405162461bcd60e51b815260206004820152603160248201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f60448201527f776e6572206e6f7220617070726f766564000000000000000000000000000000606482015260840161043a565b6108cf84848484610e6f565b50505050565b606061032d82610eed565b6007546001600160a01b0316331461093a5760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161043a565b6109448383611077565b61056f8282611091565b6007546001600160a01b031633146109a85760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161043a565b6001600160a01b038116610a245760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201527f6464726573730000000000000000000000000000000000000000000000000000606482015260840161043a565b61069b81610d4f565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190610a628261069e565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b0316610b145760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161043a565b6000610b1f8361069e565b9050806001600160a01b0316846001600160a01b03161480610b5a5750836001600160a01b0316610b4f846103c5565b6001600160a01b0316145b80610b8a57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b0316610ba58261069e565b6001600160a01b031614610c215760405162461bcd60e51b815260206004820152602560248201527f4552433732313a207472616e736665722066726f6d20696e636f72726563742060448201527f6f776e6572000000000000000000000000000000000000000000000000000000606482015260840161043a565b6001600160a01b038216610c835760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161043a565b610c8e600082610a2d565b6001600160a01b0383166000908152600360205260408120805460019290610cb7908490611b85565b90915550506001600160a01b0382166000908152600360205260408120805460019290610ce5908490611b9c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61069b8161113a565b600780546001600160a01b038381166001600160a01b0319831681179093556040519116919082907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e090600090a35050565b816001600160a01b0316836001600160a01b031603610e025760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161043a565b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b610e7a848484610b92565b610e868484848461117a565b6108cf5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161043a565b6000818152600260205260409020546060906001600160a01b0316610f7a5760405162461bcd60e51b815260206004820152603160248201527f45524337323155524953746f726167653a2055524920717565727920666f722060448201527f6e6f6e6578697374656e7420746f6b656e000000000000000000000000000000606482015260840161043a565b60008281526006602052604081208054610f9390611b35565b80601f0160208091040260200160405190810160405280929190818152602001828054610fbf90611b35565b801561100c5780601f10610fe15761010080835404028352916020019161100c565b820191906000526020600020905b815481529060010190602001808311610fef57829003601f168201915b50505050509050600061102a60408051602081019091526000815290565b9050805160000361103c575092915050565b81511561106e578082604051602001611056929190611bb4565b60405160208183030381529060405292505050919050565b610b8a846112c6565b6108438282604051806020016040528060008152506113bc565b6000828152600260205260409020546001600160a01b031661111b5760405162461bcd60e51b815260206004820152602e60248201527f45524337323155524953746f726167653a2055524920736574206f66206e6f6e60448201527f6578697374656e7420746f6b656e000000000000000000000000000000000000606482015260840161043a565b6000828152600660209081526040909120825161056f92840190611730565b6111438161143a565b6000818152600660205260409020805461115c90611b35565b15905061069b57600081815260066020526040812061069b916117b4565b60006001600160a01b0384163b156112bb57604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906111be903390899088908890600401611be3565b6020604051808303816000875af19250505080156111f9575060408051601f3d908101601f191682019092526111f691810190611c1f565b60015b6112a1573d808015611227576040519150601f19603f3d011682016040523d82523d6000602084013e61122c565b606091505b5080516000036112995760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161043a565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050610b8a565b506001949350505050565b6000818152600260205260409020546060906001600160a01b03166113535760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201527f6e6578697374656e7420746f6b656e0000000000000000000000000000000000606482015260840161043a565b600061136a60408051602081019091526000815290565b9050600081511161138a57604051806020016040528060008152506113b5565b80611394846114d5565b6040516020016113a5929190611bb4565b6040516020818303038152906040525b9392505050565b6113c683836115ee565b6113d3600084848461117a565b61056f5760405162461bcd60e51b815260206004820152603260248201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560448201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606482015260840161043a565b60006114458261069e565b9050611452600083610a2d565b6001600160a01b038116600090815260036020526040812080546001929061147b908490611b85565b909155505060008281526002602052604080822080546001600160a01b0319169055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6060816000036114fc5750506040805180820190915260018152600360fc1b602082015290565b8160005b8115611526578061151081611c3c565b915061151f9050600a83611c6b565b9150611500565b60008167ffffffffffffffff8111156115415761154161198f565b6040519080825280601f01601f19166020018201604052801561156b576020820181803683370190505b5090505b8415610b8a57611580600183611b85565b915061158d600a86611c7f565b611598906030611b9c565b60f81b8183815181106115ad576115ad611c93565b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053506115e7600a86611c6b565b945061156f565b6001600160a01b0382166116445760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015260640161043a565b6000818152600260205260409020546001600160a01b0316156116a95760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015260640161043a565b6001600160a01b03821660009081526003602052604081208054600192906116d2908490611b9c565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b03861690811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b82805461173c90611b35565b90600052602060002090601f01602090048101928261175e57600085556117a4565b82601f1061177757805160ff19168380011785556117a4565b828001600101855582156117a4579182015b828111156117a4578251825591602001919060010190611789565b506117b09291506117ea565b5090565b5080546117c090611b35565b6000825580601f106117d0575050565b601f01602090049060005260206000209081019061069b91905b5b808211156117b057600081556001016117eb565b6001600160e01b03198116811461069b57600080fd5b60006020828403121561182757600080fd5b81356113b5816117ff565b60005b8381101561184d578181015183820152602001611835565b838111156108cf5750506000910152565b60008151808452611876816020860160208601611832565b601f01601f19169290920160200192915050565b6020815260006113b5602083018461185e565b6000602082840312156118af57600080fd5b5035919050565b80356001600160a01b03811681146118cd57600080fd5b919050565b600080604083850312156118e557600080fd5b6118ee836118b6565b946020939093013593505050565b60008060006060848603121561191157600080fd5b61191a846118b6565b9250611928602085016118b6565b9150604084013590509250925092565b60006020828403121561194a57600080fd5b6113b5826118b6565b6000806040838503121561196657600080fd5b61196f836118b6565b91506020830135801515811461198457600080fd5b809150509250929050565b634e487b7160e01b600052604160045260246000fd5b600067ffffffffffffffff808411156119c0576119c061198f565b604051601f8501601f19908116603f011681019082821181831017156119e8576119e861198f565b81604052809350858152868686011115611a0157600080fd5b858560208301376000602087830101525050509392505050565b60008060008060808587031215611a3157600080fd5b611a3a856118b6565b9350611a48602086016118b6565b925060408501359150606085013567ffffffffffffffff811115611a6b57600080fd5b8501601f81018713611a7c57600080fd5b611a8b878235602084016119a5565b91505092959194509250565b600080600060608486031215611aac57600080fd5b611ab5846118b6565b925060208401359150604084013567ffffffffffffffff811115611ad857600080fd5b8401601f81018613611ae957600080fd5b611af8868235602084016119a5565b9150509250925092565b60008060408385031215611b1557600080fd5b611b1e836118b6565b9150611b2c602084016118b6565b90509250929050565b600181811c90821680611b4957607f821691505b602082108103611b6957634e487b7160e01b600052602260045260246000fd5b50919050565b634e487b7160e01b600052601160045260246000fd5b600082821015611b9757611b97611b6f565b500390565b60008219821115611baf57611baf611b6f565b500190565b60008351611bc6818460208801611832565b835190830190611bda818360208801611832565b01949350505050565b60006001600160a01b03808716835280861660208401525083604083015260806060830152611c15608083018461185e565b9695505050505050565b600060208284031215611c3157600080fd5b81516113b5816117ff565b600060018201611c4e57611c4e611b6f565b5060010190565b634e487b7160e01b600052601260045260246000fd5b600082611c7a57611c7a611c55565b500490565b600082611c8e57611c8e611c55565b500690565b634e487b7160e01b600052603260045260246000fdfea164736f6c634300080d000a";

type MyTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MyTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MyToken__factory extends ContractFactory {
  constructor(...args: MyTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MyToken> {
    return super.deploy(overrides || {}) as Promise<MyToken>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MyToken {
    return super.attach(address) as MyToken;
  }
  override connect(signer: Signer): MyToken__factory {
    return super.connect(signer) as MyToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MyTokenInterface {
    return new utils.Interface(_abi) as MyTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MyToken {
    return new Contract(address, _abi, signerOrProvider) as MyToken;
  }
}