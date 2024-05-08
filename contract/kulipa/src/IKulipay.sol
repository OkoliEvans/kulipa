// SPDX-License-Identifier: APACHE3.0
pragma solidity ^0.8.2;
import "./kulipay.sol";
interface IKulipay {
    function setNewVault(address newVault) external;
    function fundWithUSDT(uint256 mpesaAccount, uint256 amount) external;
    function fundWithUSDC(uint256 mpesaAccount, uint256 amount) external;
    function fundWithEth(uint256 mpesaAccount, uint256 amount) external payable;
    function payBillWithUSDT(uint256 billNumber, uint256 amount) external;
    function payBillWithUSDC(uint256 billNumber, uint256 amount) external;
    function payBillWithETH(uint256 billNumber, uint256 amount) external payable;
    function buyGoodsWithUSDT(uint256 tillNumber, uint256 amount) external;
    function buyGoodsWithUSDC(uint256 tillNumber, uint256 amount) external;
    function buyGoodsWithETH(uint256 tillNumber, uint256 amount) external payable;
    function withdrawUSDT(uint256 amount, address to) external;
    function withdrawUSDC(uint256 amount, address to) external;
    function withdrawETH(uint256 amount, address to) external payable;
}