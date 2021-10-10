// contracts/Passpet.sol
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract PassPet is ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    uint vetAddress;
    uint vetSig;

    constructor() public ERC721("PassPet", "PET") {}

    function mintPET(address petOwner, string memory metadataURI)
        public onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();

        uint256 newItemId = _tokenIds.current();
        _safeMint(petOwner, newItemId);
        _setTokenURI(newItemId, metadataURI);

        return newItemId;
    }

    function setVet(uint x) public {
        vetAddress = x;
    }

    function setSig(uint y) public {
        vetSig = y; 
    }

    function getVet() public view returns (uint256) {
        return _vetAddress;
    }

    function getSig() public view returns (uint256) {
        return _vetSig;
    }