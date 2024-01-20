// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
  uint count = 0;

  constructor() ERC721("NFT", "NFT") {}

  function mint(string memory _url) external {
    count++;
    _safeMint(msg.sender, count);
    _setTokenURI(count, _url);
  }
}