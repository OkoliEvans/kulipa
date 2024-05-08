// SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

import "../lib/openzeppelin-contracts/contracts/token/ERC20/ERC20.sol";
contract KuliPay is ERC20 {
    constructor() ERC20("Kulipay", "KULIPAY") {
        // Mint 100 tokens to msg.sender
        // Similar to how
        // 1 dollar = 100 cents
        // 1 token = 1 * (10 ** decimals)
        _mint(msg.sender, 21000000 * 10 ** uint(decimals()));
    }
}
